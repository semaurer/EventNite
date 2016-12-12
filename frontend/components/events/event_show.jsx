import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/modal_style';
import TicketModal from '../tickets/ticket_modal';

class EventShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId);
  }

  openModal(bool) {
    this.setState({ modalOpen: true,
      signIn: bool });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    ModalStyle.content.top = "-300px";
    this.props.clearErrors();
  }

  onModalOpen () {
    ModalStyle.content.top = "95px";
  }

  render () {

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
      if (this.props.event.price !== "free") price = "$" + this.props.event.price;
      if (this.props.event.author) firstName = this.props.event.author.first_name;
      if (price === "free") ticketText = "Register"
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
                  <li className="pricing">{ price }</li>
                </ul>
              </div>
            </span>
            <span className="bookmark-register">
              <button className="bookmark">O</button>
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

          <TicketModal>
            
          </TicketModal>
        </Modal>
      </div>
    );
  }
}

export default EventShow;
