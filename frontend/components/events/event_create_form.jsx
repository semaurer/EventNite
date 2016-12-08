import React from 'react';
import { Link } from 'react-router';

class EventCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      start_date_time: "",
      end_date_time: "",
      description: "",
    };
    this.eventCreateEls = this.eventCreateEls.bind(this);
    this.updateEventState = this.updateEventState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEventState(prop) {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.createEvent(event)
      .then(() => this.props.clearErrors());
  }

  eventCreateEls() {
    return (
      <div className="c-e-form">
        <header className="c-e-form-header">
          <article className="form-step">1</article>
          <h3 className="form-section-header">Event Details</h3>
        </header>
        <form className="create-event-form">
          <label className="field-header">EVENT TITLE</label>
          <input className="c-e-item" type="text"
            value={ this.state.title }
            onChange={ this.updateEventState("title") }
            placeholder="Give it a short distinct name"></input>
          <label className="field-header">LOCATION</label>
          <input className="c-e-item" type="text"
            value={ this.state.location }
            onChange={ this.updateEventState("location") }></input>
          <div className="time-section">
            <ul className="time-headers">
              <li className="time-header-l">STARTS</li>
              <li className="time-header-r">ENDS</li>
            </ul>
            <ul className="time-inputs">
              <input className="c-e-item" type="datetime-local"
                value={ this.state.start_date_time }
                onChange={ this.updateEventState("start_date_time") }></input>
              <input className="c-e-item" type="datetime-local"
                value={ this.state.end_date_time }
                onChange={ this.updateEventState("end_date_time") }></input>
            </ul>
          </div>
          <label className="field-header">EVENT IMAGE</label>
          <span className="image-container">
            <div className="image-area">
              <li className="image-thumb">O</li>
              <li className="image-header">ADD EVENT IMAGE</li>
              <li className="image-text">choose a compelling image that brings your event to life.</li>
            </div>
          </span>
          <label className="field-header">EVENT DESCRIPTION</label>
          <textarea rows="10" cols="100"
            value={ this.state.description }
            onChange={ this.updateEventState("description") }></textarea>
        </form>
      </div>
    );
  }

  render () {
    const formFieldsEls = this.eventCreateEls();
    const errors = [];
    this.props.errors.forEach((error, _idx) => {
      errors.push(<li key={ _idx }>{ error }</li>);
    });

    return (
      <div className="event-create-page">
        <header>
          <h2 className="event-create-header">Create An Event</h2>
          <button onClick={this.handleSubmit}
            className="header-e-create-submit">MAKE EVENT LIVE
          </button>
          <span className="header-form-divider"></span>
        </header>
        { formFieldsEls }
        <footer>
          <h2 className="create-event-header">Nice Job! You're almost done.</h2>
          <button onClick={ this.handleSubmit }
            className="footer-e-create-submit">MAKE YOUR EVENT LIVE
          </button>
          <ul className="c-e-errors">{ errors }</ul>
        </footer>
      </div>
    );
  }
}

export default EventCreateForm;
