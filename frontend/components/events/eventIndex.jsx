import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import CategoriesIndexContainer from '../categories/categoriesIndexContainer';

class EventIndex extends React.Component {
  componentDidMount () {
    this.props.fetchEvents();
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
      let isSaved = false;
      savedEvents.forEach(savedEventId => {
        if (event.id === savedEventId) isSaved = true;
      });

      const startDate = new Date(event.start_date_time).toDateString();
      const price = event.price !== "free" ? "$" + event.price : "FREE";

      return (
        <li key={ event.id } className="each-event group">
          <Link to={ `events/${event.id}`}>
            <span className="event-top-bar">
              <img src={ event.image_url } />
              <ul>
                <li className="top-li">{ startDate }</li>
                <li className="events-index-title"> { event.title }</li>
                <li className="events-index-location">{ event.location }</li>
              </ul>
            </span>
          </Link>
          <span className="event-bottom-bar">
            <div className="index-pricing">{ price }</div>
            <div>
              <button id={ event.id } onClick={ this.updateSavedStatus } className="index-bookmark" />
              <button
                className={classNames('index-bookmark-cover', {"index-bookmark-cover-false": isSaved})}
                id={ event.id }
                onClick={ this.updateSavedStatus }
              />
            </div>
          </span>
        </li>
      );
    });
  }

  updateSavedStatus = (e) => {
    const { currentUser, saveEvent, savedEvents, unsaveEvent } = this.props;
    if (currentUser) {
      let isSaved = false;
      const currentEventId = parseInt(e.currentTarget.id);

      savedEvents.forEach(savedEventId => {
        if (savedEventId === currentEventId) isSaved = true;
      });

      isSaved ? unsaveEvent(e.currentTarget.id) : saveEvent(e.currentTarget.id);
    }
  }

  render () {
    const { events, location, params, router, savedEvents, search } = this.props;

    return (
      <div className="browse-page group">
        <main className="browse-content">
          <aside>
            <CategoriesIndexContainer location={location} params={params} router={router} />
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
