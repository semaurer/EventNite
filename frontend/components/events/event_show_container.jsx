import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = (state) => {
  return {
    event: state.event.event,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    createTicket: (ticket) => dispatch(createTicket(ticket)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
