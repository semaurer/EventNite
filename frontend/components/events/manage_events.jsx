import React from 'react';
import { Link } from 'react-router';

class ManageEvents extends React.Component {
  constructor(props) {
    super(props);

    this.eventEls = this.eventEls.bind(this);
  }

  componentDidMount () {
    this.props.fetchEvents();
  }

  eventEls () {
    return this.props.currentUserEvents.map((event, _idx) => {
      const startDate = new Date(event.start_date_time).toDateString();
      return (
      <li key={ _idx }>
        <Link to={ `events/${event.id}`}>
          <h3>{ event.title }</h3>
        </Link>
        <div className="manage-event-time">{ startDate } { event.start_time }</div>
        <ul className="management-links">
          <Link>Delete</Link>
          <Link>Edit</Link>
          <Link to={ `events/${event.id}` }>View</Link>
        </ul>
      </li>
      );
    });
  }

  render () {
    const events = this.eventEls();

    return (
      <div className="manage-events-page group">
        <main className="manage-main">
          <div>
            <h2>Manage Events</h2>
            <ul className="manage-events-container">
              { events }
            </ul>
          </div>
          <aside>

          </aside>
        </main>
      </div>
    );
  }
}

export default ManageEvents;
