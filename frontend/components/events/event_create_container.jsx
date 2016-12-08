import React from 'react';
import { connect } from 'react-redux';
import EventCreateForm from './event_create_form';
import { createEvent } from '../../actions/event_actions';
import { clearErrors } from '../../actions/session_actions'

const mapStateToProps = ({ event }) => {
  return {
    event: event.event,
    errors: event.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCreateForm);
