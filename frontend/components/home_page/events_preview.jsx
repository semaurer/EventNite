import React from 'react';
import { Link } from 'react-router';

class EventsPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: false };

    this.eventPreviewEls = this.eventPreviewEls.bind(this);
    this.updateBookmark = this.updateBookmark.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  updateBookmark(e) {
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

  eventPreviewEls() {
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
    let header = <h3>Popular Events</h3>;
    if (this.props.currentUser !== null) header = <h3>Events For You</h3>;
    let eventsPreview = "";
    if (this.props.events.length > 0) eventsPreview = this.eventPreviewEls();

    return(
      <div className="previews-alignment group">
        <div className="previews-container">
          {header}
          { eventsPreview }
        </div>
      </div>
    );
  }
}


export default EventsPreview;
