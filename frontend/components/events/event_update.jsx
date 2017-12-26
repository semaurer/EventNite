import React from 'react';

class EventUpdate extends React.Component {
  state = {
    title: "",
    location: "",
    start_date_time: "",
    end_date_time: "",
    description: "",
    imageFile: "",
    imageUrl: "",
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId)
      .then(() => { this.updateState() });
  }

  updateState = () => {
    const { event } = this.props;
    const startTime = event.start_date_time;
    const endTime = event.end_date_time;

    this.setState({
      title: event.title,
      location: event.location,
      start_date_time: startTime.slice(0, startTime.length - 1),
      end_date_time: endTime.slice(0, endTime.length - 1),
      description: event.description,
      imageFile: event.imageFile,
      imageUrl: event.image_url
    });
  }

  updateEventState = (prop) => {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { params, updateEvent } = this.props;
    const {
      description,
      end_date_time,
      imageFile,
      location,
      start_date_time,
      title,
    } = this.state;

    let formData = new FormData();
    formData.append("event[title]", title)
    formData.append("event[location]", location)
    formData.append("event[start_date_time]", start_date_time)
    formData.append("event[end_date_time]", end_date_time)
    formData.append("event[description]", description)
    formData.append("event[image]", imageFile)

    updateEvent(formData, params.eventId)
      .then(({ event }) => {
        this.redirect({
          ...this.state
        });
      });
  }

  updateFile = (e) => {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) fileReader.readAsDataURL(file);
  }

  redirect = (event) => {
    this.props.clearErrors();
    this.props.router.push(`/events/${event.id}`)
  }

  renderUpdateFields = () => {
    const srcLength = this.state.imageUrl.length;

    return (
      <div className="c-e-form group">
        <header className="c-e-form-header">
          <article className="form-step">1</article>
          <h3 className="form-section-header">Event Details</h3>
        </header>
        <form className="create-event-form">
          <label className="field-header">EVENT TITLE</label>
          <input
            className="c-e-item"
            type="text"
            value={this.state.title}
            onChange={this.updateEventState("title")}
            placeholder="Give it a short distinct name"
            value={this.state.title}
          />
          <label className="field-header">LOCATION</label>
          <input
            className="c-e-item"
            type="text"
            value={this.state.location}
            onChange={this.updateEventState("location")}
            placeholder="Specify where it's held."
          />
          <div className="time-section">
            <ul className="time-headers">
              <li className="time-header-l">STARTS</li>
              <li className="time-header-r">ENDS</li>
            </ul>
            <ul className="time-inputs">
              <input
                className="c-e-item-time"
                type="datetime-local"
                value={this.state.start_date_time}
                onChange={this.updateEventState("start_date_time")}
              />
              <input
                className="c-e-item-time"
                type="datetime-local"
                value={this.state.end_date_time}
                onChange={this.updateEventState("end_date_time")}
              />
            </ul>
          </div>
          <label className="field-header e-i">EVENT IMAGE</label>
          <span className="image-container">
            <div className="image-area">
              <input
                className="image-file-input"
                type="file"
                onChange={this.updateFile}
              />
              <img className={srcLength ? 'img-preview' : 'disp-none'} src={this.state.imageUrl} />
              <div className={srcLength ? 'img-none' : 'img-absolute'}>
                <li className="image-thumb">O</li>
                <li className="image-header">ADD EVENT IMAGE</li>
                <li className="image-text">Choose a compelling image that brings your event to life.</li>
              </div>
            </div>
          </span>
          <label className="field-header ta">EVENT DESCRIPTION</label>
          <textarea
            className="c-e-descript"
            rows="9"
            cols="74"
            value={this.state.description}
            onChange={this.updateEventState("description")}
          />
        </form>
      </div>
    );
  }

  render() {
    const { event, errors } = this.props;

    const formattedErrors = errors.map((error, _idx) => {
      return <li key={_idx}>{error}</li>;
    });

    return (
      <div className="event-create-page group">
        <header className="header-container-c-e">
          <h2 className="event-create-header">{this.state.title}</h2>
          <h4 className="event-update-header-time">
            {event.formatted_start_date_time} from {event.start_time} to {event.end_time}
          </h4>
          <button onClick={this.handleSubmit} className="header-update-button">SAVE</button>
          <ul className="c-e-errors-top">{formattedErrors}</ul>
        </header>
        <span className="header-form-divider" />
        {this.renderUpdateFields()}
        <button onClick={this.handleSubmit} className="bottom-update-button">SAVE</button>
      </div>
    );
  }
}

export default EventUpdate;
