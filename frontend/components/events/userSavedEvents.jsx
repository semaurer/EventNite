import React from 'react';
import { Link } from 'react-router';

class UserSavedEvents extends React.Component {
  state = { loading: true }

  componentDidMount() {
    this.props.fetchSavedEvents()
      .then(() => this.setState({ loading: false }));
  }

  unsaveEvent = (e) => {
    this.props.unsaveEvent(e.currentTarget.id);
    this.props.removeEvent(e.currentTarget.id);
  }

  redirect = () => {
    const { location, router } = this.props;
    location.pathName === "/users/tickets" ? router.push("/users/saved-events") : router.push("/users/tickets");
  }

  renderSavedEvents = () => {
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

  renderTab = () => {
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
          <li onClick={ this.redirect } className="u-e-tab">
            <ul>
              <li onClick={ this.redirect }>Your Events</li>
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
    const { currentUser, events } = this.props;

    return (
      <div className="users-events group">
        <header>
          <h2>{ currentUser ? `${currentUser.fname} ${currentUser.lname}` : '' }</h2>
          <ul className="u-e-header group">
            { this.renderTab() }
          </ul>
        </header>
        <span className="user-saved-events group">
          <main>
            { this.state.loading ? <div className="loader" /> : null }
            { events ? this.renderSavedEvents() : null }
          </main>
        </span>
      </div>
    );
  }
}

export default UserSavedEvents;
