import React from 'react';
import { Link } from 'react-router';

class EventIndex extends React.Component {
  state = { categoryMenu: "closed" };

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname.includes("categories")) {
      if (nextProps.location.pathname === "events") {
        this.props.fetchEvents();
        this.setState({ categoryMenu: "closed" });
      }
    }
  }

  componentDidMount () {
    this.props.fetchEvents();
    this.props.fetchCategories();
  }

  returnToFull = () => {
    this.setState({ categoryMenu: "full" });
    this.props.router.push("/events/categories");
    this.props.fetchEvents();
  }

  parentCatMenu = () => {
    const fullMenuEls = [<div onClick={ this.returnToFull }
      className="non-active"
      key="cat-index"><h4>All Categories</h4></div>];
    let currentParentId = null;
    this.props.categories.forEach(category => {
      if (this.props.params.categoryName === category.name) {
        fullMenuEls.push(<div className="all-c"
          key={ category.id }><h4
          id={ category.id }>{ category.name }</h4></div>);
        currentParentId = category.id;
      }
    });

    this.props.categories.forEach(category => {
      if (currentParentId === category.parent_category_id) {
        fullMenuEls.push(<div className="non-active"
          key={ category.id }><h4 onClick={ this.configureMenuForSubCat }
          id={ category.id }>{ category.name }</h4></div>);
      }
    });

    return fullMenuEls;
  }

  subCatMenu = () => {
    const fullMenuEls = [<div onClick={ this.returnToFull }
      className="non-active"
      key="cat-index"><h4>All Categories</h4></div>];
    let parentCatEl = "";
    let subCatEl = "";

    this.props.categories.forEach(category => {
      if (this.props.params.categoryName === category.name) {
        parentCatEl =
        <div className="all-c"
          key={ category.id }><h4 onClick={ this.configureMenuForSubCat }
          id={ category.id }>{ category.name }</h4></div>;
      }
      if (this.props.params.subCategoryName === category.name) {
        subCatEl =
        <div className="all-c" key={ category.id }><h4
          id={ category.id }>{ category.name }</h4></div>;
      }
    });
    fullMenuEls.push(parentCatEl);
    fullMenuEls.push(subCatEl);

    return fullMenuEls;
  }

  configureMenuForSubCat = (e) => {
    let parentCat = "";
    let childCat = "";

    this.props.categories.forEach(category => {
      if (parseInt(e.currentTarget.id) === category.id) {
        childCat = category;
      }
    });

    this.props.categories.forEach(category => {
      if (category.id === childCat.parent_category_id) {
        parentCat = category;
      }
    });
    this.setState({ categoryMenu: "subSelected" });
    this.props.router.push(`events/categories/${parentCat.name}/${childCat.name}`);
    this.props.removeEvents();
    this.props.categoryFilterFetchEvents(e.currentTarget.id);
  }

  configureMenuForCats = (e) => {
    this.setState({ categoryMenu: "parentSelected" });
    this.props.router.push(`events/categories/${e.currentTarget.innerText}`);
    this.props.removeEvents();
    this.props.categoryFilterFetchEvents(e.currentTarget.id);
  }

  changeMenuState = (e) => {
    if (this.state.categoryMenu === "closed") {
      this.props.resetSearch();
      this.setState({ categoryMenu: "full" });
      this.props.router.push("events/categories");
    } else {
      this.setState({ categoryMenu: "closed" });
      this.props.router.push("/events");
      this.props.removeEvents();
      this.props.fetchEvents();
    }
  }

  renderFullCategoryMenu = () => {
    const { categories } = this.props;

    const allCategories = categories.map((category) => {
      if (!category.parent_category_id) {
        return (
          <div key={ category.id } className="non-active">
            <h4 onClick={ this.configureMenuForCats } id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    return (
      <div className="all-c" key="cat-index">
        <h4>All Categories</h4>
        { allCategories }
      </div>
    );
  }

  updateSavedStatus = (e) => {
    if (this.props.currentUser === null) return;
    let updateBool = false;
    const currentEventId = parseInt(e.currentTarget.id);

    this.props.savedEvents.forEach(savedEventId => {
      if (savedEventId === currentEventId) updateBool = true;
    });

    if (updateBool === true) {
      this.props.unsaveEvent(e.currentTarget.id);
    } else {
      this.props.saveEvent(e.currentTarget.id);
    }
  }

  determineHeader = () => {
    const { events, search } = this.props;
    if (search) {
      return events.length ? `${search} events` : `Sorry, we couldn't find any ${search} events`
    }
    return "Events for you"
  }

  renderEvents = (savedEvents) => {
    return this.props.events.map((event) => {
      let bookmarkBool = false;
      savedEvents.forEach(savedEventId => {
        if (event.id === savedEventId) {
          bookmarkBool = true;
        }
      });

      let bookmark = <button id={ event.id }
        onClick={ this.updateSavedStatus }
        className="bookmark-ind"></button>;

      let bookmarkCover = <button id={ event.id }
        onClick={ this.updateSavedStatus }
        className="bookmark-ind-cover-false"></button>;
        if (bookmarkBool === false) bookmarkCover = <button id={ event.id }
          onClick={ this.updateSavedStatus } className="bookmark-ind-cover"></button>;

      const startDate = new Date(event.start_date_time).toDateString();
      let price = "FREE";
      if (event.price !== "free") price = "$" + event.price;

      return (
        <li key={ event.id } className="each-event group">
          <Link to={ `events/${event.id}`}>
            <span className="event-top-bar">
              <img src={ event.image_url }></img>
              <ul>
                <li className="top-li">{ startDate }</li>
                <li className="e-i-title"> { event.title }</li>
                <li className="e-i-location">{ event.location }</li>
              </ul>
            </span>
          </Link>
          <span className="event-bot-bar">
            <div className="e-b-pricing">{ price }</div>
            <div>
              { bookmark }
              { bookmarkCover }
            </div>
          </span>
        </li>
      );
    });
  }

  renderCategories = () => {
    const { categoryMenu } = this.state;

    switch (categoryMenu) {
      case 'full':
        return this.renderFullCategoryMenu();
      case 'parentSelected':
        return this.parentCatMenu();
      case 'subSelected':
        return this.subCatMenu();
      default:
        return null;
    }
  }

  render () {
    const { events, savedEvents, search } = this.props;

    return (
      <div className="browse-page group">
        <main className="browse-content">
          <aside>
            <div className="category-selector">
              <h3 onClick={ this.changeMenuState }>CATEGORY</h3>
              { this.renderCategories() }
            </div>
          </aside>
          <div className="events">
            <h2>{ this.determineHeader() }</h2>
            <ul>
              { !events.length && !search ? <div className="loader" /> : null }
              { this.renderEvents(savedEvents) }
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default EventIndex;
