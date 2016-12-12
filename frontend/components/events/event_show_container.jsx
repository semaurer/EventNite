import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return {
    event: state.event.event,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
