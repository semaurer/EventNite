import React from 'react';
import { Link } from 'react-router';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);

    this.eventEls = this.eventEls.bind(this);
  }

  componentDidMount () {
    this.props.fetchEvents();
    this.props.fetchCategories();
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
    debugger
    let events = "";
    if (this.props.events) events = this.eventEls();

    return (
      <div className="browse-page group">
        <main className="browse-content">
          <aside>
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
