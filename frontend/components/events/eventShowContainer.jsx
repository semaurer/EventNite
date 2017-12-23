import React from 'react';
import { connect } from 'react-redux';
import EventShow from './eventShow';
import { fetchEvent, saveEvent, unsaveEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = ({ event, session }) => {
  return {
    event: event.event ? event.event : {},
    currentUser: session.currentUser,
    savedEvents: session.currentUser ? session.currentUser.saved_events : [],
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

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
