import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../../app/assets/stylesheets/manage_modal_style';

class ManageEvents extends React.Component {
    state = { modalOpen: false, currentEventId: null, loading: true };

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
    ModalStyle.content.top = "-18.75rem";
  }

  onModalOpen () {
    ModalStyle.content.top = "5.94rem";
  }

  componentDidMount () {
    this.props.fetchEvents()
      .then(() => this.setState({ loading: false }));
  }

  sendEventId = (e) => {
    this.setState({ currentEventId: e.currentTarget.id });
    this.openModal();
  }

  sendDeleteRequest = () => {
    this.props.deleteEvent(this.state.currentEventId);
    this.closeModal();
  }

  renderEvents = () => {
    return this.props.currentUserEvents.map((event, _idx) => {
      const startDate = new Date(event.start_date_time).toDateString();
      return (
        <li key={ _idx }>
          <Link to={ `events/${event.id}` }>
            <h3>{ event.title }</h3>
          </Link>
          <div className="manage-event-time">{ startDate } { event.start_time }</div>
          <ul className="management-links">
            <Link id={ event.id } className="e-m-modal-b" onClick={ this.sendEventId }>Delete</Link>
            <Link to={ `events/${event.id}/edit`}>Edit</Link>
            <Link to={ `events/${event.id}` }>View</Link>
          </ul>
        </li>
      );
    });
  }

  render () {
    return (
      <div className="manage-events-page group">
        <main className="manage-main">
          <div className="manage-events-div">
            <h2>Manage Events</h2>
            <ul className="manage-events-container">
              { this.state.loading ?  <div className="loader" /> : null }
              { this.renderEvents() }
            </ul>
          </div>
        </main>
        <Modal
          contentLabel=""
          isOpen={ this.state.modalOpen }
          onAfterOpen={ this.onModalOpen }
          onRequestClose={ this.closeModal }
          style={ ModalStyle }
        >
          <h3 className="manage-modal-header">Delete this event?</h3>
          <h4 className="warning">(These changes can not be undone)</h4>
          <div className="delete-buttons">
            <button className="really-delete" onClick={ this.sendDeleteRequest }>Delete</button>
            <button className="delete-cancel" onClick={ this.closeModal }>Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}


export default ManageEvents;
