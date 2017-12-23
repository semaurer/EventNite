import React from 'react';
import { connect } from 'react-redux';
import EventShow from './eventShow';
import { fetchEvent, saveEvent, unsaveEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';


const mapStateToProps = (state) => {
  let userSavedEvents = [];
  if (state.session.currentUser) {
    userSavedEvents = state.session.currentUser.saved_events;
  }

  return {
    event: state.event.event,
    currentUser: state.session.currentUser,
    savedEvents: userSavedEvents,
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
