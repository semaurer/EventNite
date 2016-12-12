import React from 'react';
import { connect } from 'react-redux';
import ManageEvents from './manage_events';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import { selectCurrentUserEvents } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUserEvents: selectCurrentUserEvents(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageEvents);
