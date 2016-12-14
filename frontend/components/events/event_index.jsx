import React from 'react';
import { Link } from 'react-router';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryOpen: "closed" };
    this.eventEls = this.eventEls.bind(this);
    this.changeMenuState = this.changeMenuState.bind(this);
    this.configureMenuForCats = this.configureMenuForCats.bind(this);
    this.configureMenuForSubCat = this.configureMenuForSubCat.bind(this);
    this.returnToFull = this.returnToFull.bind(this);
    this.fullMenuEls = this.fullMenuEls.bind(this);
    this.parentCatMenu = this.parentCatMenu.bind(this);
    this.subCatMenu = this.subCatMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname.includes("categories")) {
      if (nextProps.location.pathname === "events") {
        this.props.fetchEvents();
        this.setState({ categoryOpen: "closed" });
      }
    }
  }

  componentDidMount () {
    this.props.fetchEvents();
    this.props.fetchCategories();
  }

  returnToFull() {
    this.setState({ categoryOpen: "full" });
    this.props.router.push("/events/categories");
    this.props.fetchEvents();
  }

  parentCatMenu() {
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

  subCatMenu () {
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

  configureMenuForSubCat(e) {
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
    this.setState({ categoryOpen: "subSelected" });
    this.props.router.push(`events/categories/${parentCat.name}/${childCat.name}`);
    this.props.removeEvents();
    this.props.categoryFilterFetchEvents(e.currentTarget.id);
  }

  configureMenuForCats(e) {
    this.setState({ categoryOpen: "parentSelected" });
    this.props.router.push(`events/categories/${e.currentTarget.innerText}`);
    this.props.removeEvents();
    this.props.categoryFilterFetchEvents(e.currentTarget.id);
  }

  changeMenuState(e) {
    if (this.state.categoryOpen === "closed") {
      this.setState({ categoryOpen: "full" });
      this.props.router.push("events/categories");
    } else {
      this.setState({ categoryOpen: "closed" });
      this.props.router.push("/events");
    }
  }

  fullMenuEls() {
    const fullMenuEls = [<div className="all-c"
      key="cat-index"><h4>All Categories</h4></div>];
    this.props.categories.forEach(category => {
      if (category.parent_category_id === null) {
        fullMenuEls.push(<div key={ category.id }
          className="non-active"><h4
          onClick={ this.configureMenuForCats }
          id={ category.id }>{ category.name }</h4></div>);
      }
    });
    return fullMenuEls;
  }


  eventEls () {
    return this.props.events.map((event) => {
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
              <div className="e-b-bookmark">O</div>
            </div>
          </span>
        </li>
      );
    });
  }

  render () {
    let events = "";
    let fullMenu = "";
    if (this.props.events) events = this.eventEls();
    if (this.state.categoryOpen === "full") fullMenu = this.fullMenuEls();
    if (this.state.categoryOpen === "parentSelected") fullMenu = this.parentCatMenu();
    if (this.state.categoryOpen === "subSelected") fullMenu = this.subCatMenu();

    return (
      <div className="browse-page group">
        <main className="browse-content">
          <aside>
            <div className="category-selector">
              <h3 onClick={ this.changeMenuState }>CATEGORY</h3>
              { fullMenu }
            </div>
          </aside>
          <div className="events">
            <h2>Events For You</h2>
            <ul>
              { events }
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default EventIndex;
