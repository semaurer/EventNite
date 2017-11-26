import React from 'react';
import { Link } from 'react-router';

class EventsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarked: false
    };
  }

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
    let previews = [];
    if (this.props.events.length < 9) return;
    for (let i = 0; i < 9; i++) {
      let event = this.props.events[i];
      let startDateTime = event.formatted_start_date_time
        .slice(0, event.formatted_start_date_time.length - 6);
      let bookmarkBool = false;
      this.props.savedEvents.forEach(savedEventId => {
        if (event.id === savedEventId) {
          bookmarkBool = true;
        }
      });

      let bookmarkCover = <button id={ event.id }
        onClick={ this.updateBookmark }
        className="bookmark-ind-cover-false"></button>;
      if (bookmarkBool === false) bookmarkCover = <button id={ event.id }
        onClick={ this.updateBookmark } className="bookmark-prev-cover"></button>;
      previews.push(
        <div key={ event.id } className="each-saved-event">
          <Link to={ `events/${event.id}` }>
            <img src={ event.image_url }></img>
            <span className="saved-main-info">
              <article className="saved-time">{ startDateTime } { event.start_time }</article>
              <article className="saved-title">{ event.title }</article>
              <article className="preview-location">{ event.location }</article>
            </span>
          </Link>
          <span className="bookmark-bar">
            <button id={ event.id } onClick={ this.updateBookmark }
              className="bookmark-saved"></button>
            { bookmarkCover }
          </span>
        </div>);
    }
    return previews;
  }

  render() {
    const { currentUser, events } = this.props;

    return(
      <div className="previews-alignment">
        <div className="previews-container">
          <h3>{ currentUser ? 'Events For You' : 'Popular Events' }</h3>
          { events.length ? this.renderEventsPreview() : <div className="loader" />}
        </div>
      </div>
    );
  }
}


export default EventsPreview;
