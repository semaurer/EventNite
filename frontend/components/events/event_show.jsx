import React from 'react';
import { Link } from 'react-router';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId);
  }

  render () {

    let event_image = <img className="event-img"></img>;
    if (this.props.event) event_image = <img
      src={ this.props.event.image_url }
      className="event-img"></img>;

    return (
      <div className="show-page group">
        <div className="show-page-bg">
          <div className="show-template">
            <span className="image-and-info">
              { event_image }
              <div className="title-date-host-price-container">
                <ul className="t-d-h-p-container-list">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </span>
            <span className="bookmark-register">
              <button className="bookmark">O</button>
              <button className="ticket-submit">Tickets</button>
            </span>
            <span className="description-date-loc">
              <div className="info-left">
                <h3 className="info-section-header"></h3>
                <ul className="description-info-list">
                  <li className="d-i-title"></li>
                  <li></li>
                  <li className="d-i-location"></li>
                  <li className="d-i-description"></li>
                </ul>
              </div>
              <div className="info-right">
                <section>
                  <h3></h3>
                  <info></info>
                  <info></info>
                </section>
                <section>
                  <h3></h3>
                  <info></info>
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
