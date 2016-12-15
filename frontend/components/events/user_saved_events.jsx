import React from 'react';
import { Link } from 'react-router';

class UserSavedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.tabEls = this.tabEls.bind(this);
    this.savedEventEls = this.savedEventEls.bind(this);
    this.redirect = this.redirect.bind(this);
    this.unsaveEvent = this.unsaveEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchSavedEvents();
  }

  unsaveEvent(e) {
    this.props.unsaveEvent(e.currentTarget.id);
    this.props.removeEvent(e.currentTarget.id);
  }

  redirect () {
    if (this.props.location.pathname === "/users/tickets") {
      this.props.router.push("/users/saved-events");
    } else {
      this.props.router.push("/users/tickets");
    }
  }

  savedEventEls() {
    return this.props.events.map(event => {
      let startDateTime = event.formatted_start_date_time
        .slice(0, event.formatted_start_date_time.length - 6);
      return (
        <div key={ event.id} className="each-saved-event">
          <Link to={ `events/${event.id}` }>
            <img src={ event.image_url }></img>
            <span className="saved-main-info">
              <article className="saved-time">{ startDateTime } { event.start_time }</article>
              <article className="saved-title">{ event.title }</article>
              <article className="saved-location">{ event.location }</article>
            </span>
          </Link>
          <span className="bookmark-bar">
            <button id={ event.id } onClick={ this.unsaveEvent }
              className="bookmark-saved"></button>
          </span>
        </div>
      );
    });
  }

  tabEls () {
    if (this.props.location.pathname === "/users/tickets") {
      return (
        <div>
          <li className="u-e-tab-active">
            <ul>
              <li>Your Events</li>
              <li></li>
            </ul>
          </li>
          <li onClick={ this.redirect } className="u-e-tab">
            <ul>
              <li>Saved Events</li>
            </ul>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li className="u-e-tab">
            <ul>
              <li onClick={ this.redirect }>Your Events</li>
              <li></li>
            </ul>
          </li>
          <li className="u-e-tab-active">
            <ul>
              <li>Saved Events</li>
            </ul>
          </li>
        </div>
      );
    }
  }

  render () {
    let tabEls = this.tabEls();
    let userName = "";
    let savedEventEls = "";
    if (this.props.events) savedEventEls = this.savedEventEls();
    if (this.props.currentUser) userName =
      `${this.props.currentUser.fname} ${this.props.currentUser.lname}`;

    return (
      <div className="users-events group">
        <header>
          <h2>{ userName }</h2>
          <ul className="u-e-header group">
            { tabEls }
          </ul>
        </header>
        <span className="user-saved-events group">
          <main>
            { savedEventEls }
          </main>
        </span>
      </div>
    );
  }
}

export default UserSavedEvents;
