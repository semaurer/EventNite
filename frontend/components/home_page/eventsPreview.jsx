import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

class EventsPreview extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  updateBookmark = ({ currentTarget }) => {
    const { currentUser, saveEvent, savedEvents, unsaveEvent } = this.props;
    if (currentUser) {
      let shouldUnsave = false;

      savedEvents.forEach(savedEventId => {
        if (savedEventId === parseInt(currentTarget.id)) shouldUnsave = true;
      });
  
      shouldUnsave === true ? unsaveEvent(currentTarget.id) : saveEvent(currentTarget.id);
    }
  }

  renderEventsPreview = () => {
    const { events, savedEvents } = this.props;
    if (events.length < 9) return <div>Sorry No Events Found</div>;

    return events.slice(0, 9).map((event, idx) => {
      const startDate = event.formatted_start_date_time
      const startDateTime = startDate.slice(0, startDate.length - 6);

      let eventSaved = false;
      savedEvents.forEach(savedEventId => {
        if (event.id === savedEventId) eventSaved = true;
      });

      return (
        <div key={ event.id } className="each-saved-event">
          <Link to={ `events/${event.id}` }>
            <img src={ event.image_url } />
            <span className="saved-main-info">
              <article className="saved-time">{ startDateTime } { event.start_time }</article>
              <article className="saved-title">{ event.title }</article>
              <article className="preview-location">{ event.location }</article>
            </span>
          </Link>
          <span className="bookmark-bar">
            <button
              className="bookmark-saved"
              id={ event.id }
              onClick={ this.updateBookmark }
            />
            <button
              className={classNames({'bookmark-prev-cover': !eventSaved })}
              id={event.id}
              onClick={this.updateBookmark}
            />
          </span>
        </div>
      );
    });
  }

  render() {
    const { currentUser, events } = this.props;

    return(
      <div className="previews-container">
        <h3>{ currentUser ? 'Events For You' : 'Popular Events' }</h3>
        { events.length ? this.renderEventsPreview() : <div className="loader" />}
      </div>
    );
  }
}

export default EventsPreview;
