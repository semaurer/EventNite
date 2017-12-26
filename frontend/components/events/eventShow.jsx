import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/ticketModalStyling';
import TicketModal from '../tickets/ticketModal';

class EventShow extends React.Component {
  state = { modalOpen: false, bookmarked: false }

  updateBookmark = () => {
    const { currentUser, event, saveEvent, unsaveEvent } = this.props;

    if (currentUser) {
      if (this.state.bookmarked) {
        this.setState({ bookmarked: false });
        unsaveEvent(event.id);
      } else {
        this.setState({ bookmarked: true });
        saveEvent(event.id);
      }
    }
  }

  checkBookmark = () => {
    const { event, savedEvents } = this.props;

    savedEvents.forEach(eventId => {
      if (eventId === event.id) this.setState({ bookmarked: true });
    })
  }

  componentDidMount() {
    const { fetchEvent, params } = this.props;

    fetchEvent(params.eventId)
      .then(() => {
        this.checkBookmark();
      });
  }

  openModal = () => {
    const { currentUser, router } = this.props;
    if (!currentUser) router.push("/");
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
    const { createTicket, event, params, router } = this.props;

    return (
      <div className="show-page group">
        <div className="show-page-bg">
          <div className="show-template">
            <span className="image-and-info">
              <img src={ event.image_url } className="event-img" />
              { !event ? <div className="loader" /> : null }
              <div className="title-date-host-price-container">
                <ul className="t-d-h-p-container-list">
                  <li className="t-d-h-p-month">{ event.start_month }</li>
                  <li className="t-d-h-p-day">{ event.start_day }</li>
                  <li className="t-d-h-p-title">{ event.title }</li>
                  <li className="t-d-h-p-author">
                    by { event.author ? event.author.first_name : 'bob' }
                  </li>
                  <li className="pricing">
                    { event.price === 'free' ? 'free' : "$" + event.price}
                  </li>
                </ul>
              </div>
            </span>
            <span className="bookmark-register">
              <button onClick={ this.updateBookmark } className="bookmark" />
              <button
                className={classNames({'bookmark-cover-false': this.state.bookmarked}, "bookmark-cover")}
                onClick={ this.updateBookmark }
              />
              <button onClick={ this.openModal } className="ticket-submit">
                { event.price === 'free' ? "Register" : "Tickets" }
              </button>
            </span>
            <span className="description-date-loc">
              <div className="info-left">
                <ul className="description-info-list">
                  <h3 className="info-section-header">Description</h3>
                  <li className="d-i-description">{ event.description }</li>
                </ul>
              </div>
              <div className="info-right">
                <section>
                  <h3>Date and Time</h3>
                  <info>{ event.formatted_start_date_time } { event.start_time } -</info>
                  <info>{ event.formatted_end_date_time } { event.end_time }</info>
                </section>
                <section className="bottom-info-section">
                  <h3>Location</h3>
                  <info>{ event.location }</info>
                </section>
              </div>
            </span>
          </div>
        </div>
        <Modal
          contentLabel=""
          isOpen={ this.state.modalOpen }
          onAfterOpen={ this.onModalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
        >
          <TicketModal
            router={ router}
            createTicket={ createTicket }
            ticketText={ event.price === 'free' ? "Register" : "Tickets" }
            price={ event.price === 'free' ? 'free' : "$" + event.price }
            endDate={ event.end_date_ticket }
            eventId={ params.eventId }
          />
        </Modal>
      </div>
    );
  }
}

export default EventShow;
