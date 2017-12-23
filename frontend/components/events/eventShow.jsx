import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/ticket_modal_style';
import TicketModal from '../tickets/ticket_modal';

class EventShow extends React.Component {
  state = { modalOpen: false, bookmarked: false }

  updateBookmark = () => {
    if (this.props.currentUser === null) return;
    if (this.state.bookmarked === false) {
      this.setState({ bookmarked: true });
      this.props.saveEvent(this.props.event.id);
    } else {
      this.setState({ bookmarked: false });
      this.props.unsaveEvent(this.props.event.id);
    }
  }

  checkBookmark = () => {
    this.props.savedEvents.forEach(eventId => {
      if (eventId === this.props.event.id) {
        this.setState({ bookmarked: true })
      }
    })
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId)
      .then(() => {
        this.checkBookmark();
      })
  }

  openModal = (bool) => {
    if (this.props.currentUser === null) {
      this.props.router.push("/")
    }
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
    ModalStyle.content.top = "-300px";
  }

  onModalOpen () {
    ModalStyle.content.top = "95px";
  }

  render () {
    let bookmark = <button
      onClick={ this.updateBookmark }
      className="bookmark"></button>;

    let bookmarkCover = <button className="bookmark-cover-false"></button>;
    if (this.state.bookmarked === false) bookmarkCover = <button
      onClick={ this.updateBookmark } className="bookmark-cover"></button>;

    let event_image = <img className="event-img"></img>;
    if (this.props.event) event_image = <img
      src={ this.props.event.image_url }
      className="event-img"></img>;

    let price = "";
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
    let ticketText = "Tickets"
    let endDateTicket = "";

    if (this.props.event) {
      startMonth = this.props.event.start_month;
      startTime = this.props.event.start_time;
      endTime = this.props.event.end_time;
      startDay = this.props.event.start_day;
      title = this.props.event.title;
      description = this.props.event.description;
      startDate = this.props.event.formatted_start_date_time
      endDate = this.props.event.formatted_end_date_time
      location = this.props.event.location;
      price = this.props.event.price;
      endDateTicket = this.props.event.end_date_ticket;
      if (this.props.event.price !== "free") price = "$" + this.props.event.price;
      if (this.props.event.author) firstName = this.props.event.author.first_name;
      if (price === "free") ticketText = "Register"
    }

    let loader;
    if (this.props.event === null) {
      loader = <div className="loader"></div>;
    }

    return (
      <div className="show-page group">
        <div className="show-page-bg">
          <div className="show-template">
            <span className="image-and-info">
              { event_image }
              { loader }
              <div className="title-date-host-price-container">
                <ul className="t-d-h-p-container-list">
                  <li className="t-d-h-p-month">{ startMonth }</li>
                  <li className="t-d-h-p-day">{ startDay }</li>
                  <li className="t-d-h-p-title">{ title }</li>
                  <li className="t-d-h-p-author">by { firstName }</li>
                  <li className="pricing">{ price }</li>
                </ul>
              </div>
            </span>
            <span className="bookmark-register">
              { bookmark }
              { bookmarkCover }
              <button onClick={ this.openModal } className="ticket-submit">{ ticketText }</button>
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

        <Modal onAfterOpen={ this.onModalOpen } style={ ModalStyle }
          contentLabel="" isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }>

          <TicketModal router={ this.props.router} createTicket={ this.props.createTicket }
            ticketText={ ticketText } price={ price }
            endDate={ endDateTicket } eventId={ this.props.params.eventId } />

        </Modal>
      </div>
    );
  }
}

export default EventShow;
