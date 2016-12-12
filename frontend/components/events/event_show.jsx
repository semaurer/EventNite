import React from 'react';
import { Link } from 'react-router';

class EventShow extends React.Component {

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId);
  }

  render () {

    let event_image = <img className="event-img"></img>;
    if (this.props.event) event_image = <img
      src={ this.props.event.image_url }
      className="event-img"></img>;

    let startMonth = "";
    let startTime = "";
    let endTime = "";
    let startDay = "";
    let title = "";
    let firstName = "";
    let description = "";
    let startDate = "";
    let endDate = "";
    let location = "";

    if (this.props.event) {
      startMonth = this.props.event.start_month;
      startTime = this.props.event.start_time;
      endTime = this.props.event.end_time;
      startDay = this.props.event.start_day;
      title = this.props.event.title;
      description = this.props.event.description;
      startDate = new Date(this.props.event.start_date_time).toDateString();
      endDate = new Date(this.props.event.end_date_time).toDateString();
      location = this.props.event.location;
      if (this.props.event.author) firstName = this.props.event.author.first_name;
    }

    return (
      <div className="show-page group">
        <div className="show-page-bg">
          <div className="show-template">
            <span className="image-and-info">
              { event_image }
              <div className="title-date-host-price-container">
                <ul className="t-d-h-p-container-list">
                  <li className="t-d-h-p-month">{ startMonth }</li>
                  <li className="t-d-h-p-day">{ startDay }</li>
                  <li className="t-d-h-p-title">{ title }</li>
                  <li className="t-d-h-p-author">by { firstName }</li>
                  <li className="pricing">free</li>
                </ul>
              </div>
            </span>
            <span className="bookmark-register">
              <button className="bookmark">O</button>
              <button className="ticket-submit">Tickets</button>
            </span>
            <span className="description-date-loc">
              <div className="info-left">
                <ul className="description-info-list">
                  <h3 className="info-section-header">Description</h3>
                  <li className="d-i-description">{ description }</li>
                </ul>
              </div>
              <div className="info-right">
                <section>
                  <h3>Date and Time</h3>
                  <info>{ startDate } { startTime } -</info>
                  <info>{ endDate } { endTime }</info>
                </section>
                <section>
                  <h3>Location</h3>
                  <info>{ location }</info>
                </section>
                <section>
                  <h3></h3>
                </section>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
