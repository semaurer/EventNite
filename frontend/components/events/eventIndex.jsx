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

  changeMenuState = (e) => {
    const { fetchEvents, removeEvents, resetSearch, router } = this.props;
    const { categoryMenu } = this.state;

    if (categoryMenu === "closed") {
      resetSearch();
      this.setState({ categoryMenu: "full" });
      router.push("events/categories");
    } else {
      this.setState({ categoryMenu: "closed" });
      router.push("/events");
      removeEvents();
      fetchEvents();
    }
  }

  renderCategories = () => {
    const { categoryMenu } = this.state;

    switch (categoryMenu) {
      case 'full':
        return this.renderFullCategoryMenu();
      case 'parentSelected':
        return this.renderParentCategoryMenu();
      case 'subSelected':
        return this.renderSubCategories();
      default:
        return null;
    }
  }

  renderFullCategoryMenu = () => {
    const { categories } = this.props;

    const allCategories = categories.map((category) => {
      if (!category.parent_category_id) {
        return (
          <div key={ category.id } className="non-active">
            <h4 onClick={ this.filterSelectedCategory } id={ category.id }>{ category.name }</h4>
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

  filterSelectedCategory = (e) => {
    const { categoryFilterFetchEvents, removeEvents, router } = this.props;

    this.setState({ categoryMenu: "parentSelected" });
    router.push(`events/categories/${e.currentTarget.innerText}`);
    removeEvents();
    categoryFilterFetchEvents(e.currentTarget.id);
  }

  renderParentCategoryMenu = () => {
    const { categories, params } = this.props;

    let currentParentId = -1;
    const parentCategory = categories.map(category => {
      if (params.categoryName === category.name) {
        currentParentId = category.id;
        return (
          <div className="all-c" key={ category.id }>
            <h4 id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    const childCategories = categories.map((category) => {
      if (currentParentId === category.parent_category_id) {
        return (
          <div className="non-active" key={ category.id }>
            <h4 onClick={ this.updateToSubCategory } id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    return (
      <div>
        <div onClick={ this.resetCategoriesMenu } className="non-active" key="cat-index" />
        <h4>All Categories</h4>
        { parentCategory }
        { childCategories }
      </div>
    );
  }

  updateToSubCategory = (e) => {
    const { categories, categoryFilterFetchEvents, removeEvents, router } = this.props;
    let subCategory;
    let parentCategory;

    categories.forEach(category => {
      if (parseInt(e.currentTarget.id) === category.id) subCategory = category;
    });

    categories.forEach(category => {
      if (category.id === subCategory.parent_category_id) parentCategory = category;
    });

    this.setState({ categoryMenu: "subSelected" });
    router.push(`events/categories/${parentCategory.name}/${subCategory.name}`);
    removeEvents();
    categoryFilterFetchEvents(e.currentTarget.id);
  }

  resetCategoriesMenu = () => {
    this.setState({ categoryMenu: "full" });
    this.props.router.push("/events/categories");
    this.props.fetchEvents();
  }

  renderSubCategories = () => {
    const { categories, params } = this.props;

    const subCategorySelection = categories.map(category => {
      if (params.categoryName === category.name) {
        return (
          <div className="all-c" key={ category.id }>
            <h4 onClick={ this.updateToSubCategory } id={ category.id }>{ category.name }</h4>
          </div>
        );
      } else if (params.subCategoryName === category.name) {
        return (
          <div className="all-c" key={ category.id }>
            <h4 id={ category.id }>{ category.name }</h4>
          </div>
        );
      }
    });

    return (
      <div>
        <div onClick={ this.resetCategoriesMenu } className="non-active" key="cat-index">
          <h4>All Categories</h4>
        </div>
        { subCategorySelection }
      </div>
    );
  }

  renderHeader = () => {
    const { events, search } = this.props;
    if (search) {
      return events.length ? `${search} events` : `Sorry, we couldn't find any ${search} events`
    }
    return "Events for you"
  }

  renderEvents = () => {
    const { events, savedEvents } = this.props;

    return events.map((event) => {
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
            <h2>{ this.renderHeader() }</h2>
            <ul>
              { !events.length && !search ? <div className="loader" /> : null }
              { this.renderEvents() }
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default EventIndex;
