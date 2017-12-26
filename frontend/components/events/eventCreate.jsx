import React from 'react';
import { Link } from 'react-router';
import CategoryExtension from '../categories/categoryExtension';

class EventCreateForm extends React.Component {
  state = {
    title: "",
    location: "",
    start_date_time: "",
    end_date_time: "",
    description: "",
    price: "free",
    imageFile: "",
    imageUrl: "",
    pricingFree: true,
    parentCategoryId: null,
    subCategoryId: null,
  }

  setParentCategoryId = (id) => {
    this.setState({ parentCategoryId: id })
  }

  setSubCategoryId = (id) => {
    this.setState({ subCategoryId: id })
  }

  componentDidMount () {
    this.props.fetchCategories();
  }

  updateEventState = (prop) => {
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const categoryIds = [this.state.parentCategoryId, this.state.subCategoryId];

    let formData = new FormData();
    formData.append("event[title]", this.state.title);
    formData.append("event[location]", this.state.location);
    formData.append("event[start_date_time]", this.state.start_date_time);
    formData.append("event[end_date_time]", this.state.end_date_time);
    formData.append("event[description]", this.state.description);
    formData.append("event[price]", this.state.price);
    formData.append("event[image]", this.state.imageFile);

    this.props.createEvent(formData, categoryIds)
      .then(({ event }) => {
        this.redirect({ ...this.state });
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

  setPricing = (e) => {
    e.preventDefault();
    if (e.currentTarget.className === "free-button") {
      this.setState({ price: "free", pricingFree: true });
    } else {
      this.setState({ pricingFree: false });
    }
  }


  renderCreateFields = () => {
    const { categories } = this.props;
    const { pricingFree } = this.state;
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
            value={ this.state.title }
            onChange={ this.updateEventState("title") }
            placeholder="Give it a short distinct name"
          />
          <label className="field-header">LOCATION</label>
          <input
            className="c-e-item"
            type="text"
            value={ this.state.location }
            onChange={ this.updateEventState("location") }
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
                value={ this.state.start_date_time }
                onChange={ this.updateEventState("start_date_time") }
              />
              <input
                className="c-e-item-time"
                type="datetime-local"
                value={ this.state.end_date_time }
                onChange={ this.updateEventState("end_date_time") }
              />
            </ul>
          </div>
          <label className="field-header e-i">EVENT IMAGE</label>
          <span className="image-container">
            <div className="image-area">
              <input className="image-file-input" type="file" onChange={ this.updateFile } />
              <img className={ srcLength ? 'img-preview' : 'disp-none' } src={ this.state.imageUrl }/>
              <div className={ srcLength ? 'img-none' : 'img-absolute' }>
                <li className="image-thumb"></li>
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
            value={ this.state.description }
            onChange={ this.updateEventState("description") }
          />
        </form>
        <section className="c-e-form-header-2">
          <article className="form-step">2</article>
          <h3 className="form-section-header-middle">Tickets</h3>
        </section>
        <form className="ticket-pricing">
          <h4>Set a price for your tickets</h4>
          <div className="pricing-buttons">
            <button className="free-button" onClick={ this.setPricing }>Free</button>
            <button className="priced-button" onClick={ this.setPricing }>Priced</button>
            { pricingFree ? (
              <div className="freeEls">
                <h4>Your event will be free!</h4>
              </div>
            ) : (
              <div className="pricedEls">
                <input type="text" placeholder="0" onChange={ this.updateEventState("price")} />
              </div>
            )}
          </div>
        </form>
        <section className="c-e-form-header-3">
          <article className="form-step">3</article>
          <h3 className="form-section-header-bot">Additional Settings</h3>
        </section>
        { !categories.length ? null : (
          <CategoryExtension
            categories={ this.props.categories }
            setParentCategoryId={ this.setParentCategoryId }
            setSubCategoryId={ this.setSubCategoryId }
          />
        )}
      </div>
    );
  }


  render () {
    const formattedErrors = this.props.errors.map((error, _idx) => {
      return <li key={ _idx }>{ error }</li>;
    });

    return (
      <div className="event-create-page group">
        <header className="header-container-c-e">
          <h2 className="event-create-header">Create An Event</h2>
          <button onClick={this.handleSubmit} className="header-e-create-submit">
            MAKE EVENT LIVE
          </button>
          <ul className="c-e-errors-top">{ formattedErrors }</ul>
        </header>
        <span className="header-form-divider" />
        { this.renderCreateFields() }
        <footer className="footer-container-c-e">
          <h2 className="create-event-header">Nice Job! You're almost done.</h2>
          <button onClick={ this.handleSubmit } className="footer-e-create-submit">
            MAKE YOUR EVENT LIVE
          </button>
          <ul className="c-e-errors-bot">{ formattedErrors }</ul>
        </footer>
      </div>
    );
  }
}

export default EventCreateForm;
