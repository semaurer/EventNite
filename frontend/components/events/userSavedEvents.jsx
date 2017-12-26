import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

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
    const { events } = this.props;

    return events.map(event => {
      let startDateTime = event.formatted_start_date_time.slice(0, event.formatted_start_date_time.length - 6);

      return (
        <div key={ event.id} className="each-saved-event">
          <Link to={ `events/${event.id}` }>
            <img src={ event.image_url } />
            <span className="saved-main-info">
              <article className="saved-time">{ startDateTime } { event.start_time }</article>
              <article className="saved-title">{ event.title }</article>
              <article className="saved-location">{ event.location }</article>
            </span>
          </Link>
          <span className="bookmark-bar">
            <button id={ event.id } onClick={ this.unsaveEvent } className="bookmark-saved" />
          </span>
        </div>
      );
    });
  }

  render () {
    const { currentUser, events, location } = this.props;
    const isTicketsView = location.pathname.includes('tickets');

    return (
      <div className="users-events group">
        <header>
          <h2>{ currentUser ? `${currentUser.fname} ${currentUser.lname}` : '' }</h2>
          <ul className="u-e-header group">
            <li
              className={classNames('u-e-tab', {"u-e-tab-active": isTicketsView})}
              onClick={isTicketsView ? null : this.redirect}
            >
              Your Events
            </li>
            <li
              className={classNames("u-e-tab", {'u-e-tab-active': !isTicketsView})}
              onClick={!isTicketsView ? null : this.redirect }
            >
              Saved Events
            </li>
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
