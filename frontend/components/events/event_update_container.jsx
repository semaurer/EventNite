import React from 'react';
import { connect } from 'react-redux';
import EventUpdate from './event_update';
import { updateEvent, fetchEvent } from '../../actions/event_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ event }) => {
  return {
    event: event.event,
    errors: event.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEvent: (event, eventId) => dispatch(updateEvent(event, eventId)),
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventUpdate);
