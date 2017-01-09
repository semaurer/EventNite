import React from 'react';
import Link from 'react-router';

class EventsPreview extends React.Component {
  constructor(props) {
    super(props);

    this.eventPreviewEls = this.eventPreviewEls.bind(this);
    this.unsaveEvent = this.unsaveEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  unsaveEvent() {

  }

  eventPreviewEls() {
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

  render() {
    let eventsPreview = "";
    // if (this.props.events.length > 0) eventsPreview = this.eventPreviewEls();

    return(
      <div>

      </div>
    );
  }
}


export default EventsPreview;
