import React from 'react';

class EventUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      start_date_time: "",
      end_date_time: "",
      description: "",
      imageFile: "",
      imageUrl: "",
    };

    this.eventUpdateEls = this.eventUpdateEls.bind(this);
    this.updateEventState = this.updateEventState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount () {
    this.props.fetchEvent(this.props.params.eventId)
      .then( () => {
        this.updateState()
      })
  }

  updateState () {
    let imageF = "";
    if (this.props.event.imageFile) imageF = this.props.event.imageFile;
    const startTime = this.props.event.start_date_time;
    const endTime = this.props.event.end_date_time;
    this.setState({ title: this.props.event.title,
    location: this.props.event.location,
    start_date_time: startTime.slice(0, startTime.length - 1),
    end_date_time: endTime.slice(0, endTime.length - 1),
    description: this.props.event.description,
    imageFile: imageF,
    imageUrl: this.props.event.image_url })
  }

  updateEventState(prop) {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("event[title]", this.state.title)
    formData.append("event[location]", this.state.location)
    formData.append("event[start_date_time]", this.state.start_date_time)
    formData.append("event[end_date_time]", this.state.end_date_time)
    formData.append("event[description]", this.state.description)
    formData.append("event[image]", this.state.imageFile)

    const event = Object.assign({}, this.state);
    this.props.updateEvent(formData, this.props.params.eventId)
      .then(({ event }) => {
        this.redirect(event);
      });
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) fileReader.readAsDataURL(file);
  }

  redirect(event) {
    this.props.clearErrors();
    this.props.router.push(`/events/${event.id}`)
  }

  eventUpdateEls() {
    let imageElsToggle = "img-absolute";
    let previewToggle = "disp-none";
    if ( this.state.imageUrl !== "" ) {
      imageElsToggle = "img-none"
      previewToggle = "img-preview";
    }

    return (
      <div className="c-e-form group">
        <header className="c-e-form-header">
          <article className="form-step">1</article>
          <h3 className="form-section-header">Event Details</h3>
        </header>
        <form className="create-event-form">
          <label className="field-header">EVENT TITLE</label>
          <input className="c-e-item" type="text"
            value={ this.state.title }
            onChange={ this.updateEventState("title") }
            placeholder="Give it a short distinct name"
            value={ this.state.title }></input>
          <label className="field-header">LOCATION</label>
          <input className="c-e-item" type="text"
            value={ this.state.location }
            onChange={ this.updateEventState("location") }
            placeholder="Specify where it's held."></input>
          <div className="time-section">
            <ul className="time-headers">
              <li className="time-header-l">STARTS</li>
              <li className="time-header-r">ENDS</li>
            </ul>
            <ul className="time-inputs">
              <input className="c-e-item-time" type="datetime-local"
                value={ this.state.start_date_time }
                onChange={ this.updateEventState("start_date_time") }></input>
              <input className="c-e-item-time" type="datetime-local"
                value={ this.state.end_date_time }
                onChange={ this.updateEventState("end_date_time") }></input>
            </ul>
          </div>
          <label className="field-header e-i">EVENT IMAGE</label>
          <span className="image-container">
            <div className="image-area">
              <input className="image-file-input"
                type="file"
                onChange={ this.updateFile }>
              </input>
              <img className={ previewToggle }
                src={ this.state.imageUrl }/>
              <div className={ imageElsToggle }>
                <li className="image-thumb">O</li>
                <li className="image-header">ADD EVENT IMAGE</li>
                <li className="image-text">Choose a compelling image that brings your event to life.</li>
              </div>
            </div>
          </span>
          <label className="field-header ta">EVENT DESCRIPTION</label>
          <textarea className="c-e-descript" rows="9" cols="74"
            value={ this.state.description }
            onChange={ this.updateEventState("description") }></textarea>
        </form>
      </div>
    );
  }

  render () {
    let startDate = "";
    let startTime = "";
    let endTime = "";
    if (this.props.event) {
      startDate = new Date(this.props.event.start_date_time).toDateString();
      startTime = this.props.event.start_time;
      endTime = this.props.event.end_time;
    }

    const formFieldsEls = this.eventUpdateEls();
    const errors = [];
    this.props.errors.forEach((error, _idx) => {
      errors.push(<li key={ _idx }>{ error }</li>);
    });

    return (
      <div className="event-create-page group">
        <header className="header-container-c-e">
          <h2 className="event-create-header">{ this.state.title }</h2>
          <h4 className="event-update-header-time">
            { startDate } from { startTime } to { endTime }</h4>
          <button onClick={this.handleSubmit}
            className="header-update-button">SAVE
          </button>
          <ul className="c-e-errors-top">{ errors }</ul>
        </header>
        <span className="header-form-divider"></span>
        { formFieldsEls }
        <button onClick={ this.handleSubmit }
          className="bottom-update-button">SAVE</button>
      </div>
    );
  }
}

export default EventUpdate;
