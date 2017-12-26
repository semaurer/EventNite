import React from 'react';
import { connect } from 'react-redux';
import ManageEvents from './manageEvents';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import { selectCurrentUserEvents } from '../../reducers/selectors';

const mapStateToProps = ({ events, session }) => {
  return {
    currentUserEvents: events.events ? selectCurrentUserEvents(events, session) : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvents);
