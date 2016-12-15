import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, saveEvent, unsaveEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';


const mapStateToProps = (state) => {

  return {
    event: state.event.event,
    currentUser: state.session.currentUser,
    savedEvents: state.session.currentUser.saved_events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    createTicket: (ticket) => dispatch(createTicket(ticket)),
    saveEvent: (eventId) => dispatch(saveEvent(eventId)),
    unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
