import React from 'react';
import { connect } from 'react-redux';
import UserSavedEvents from './userSavedEvents';
import { saveEvent, unsaveEvent, fetchSavedEvents, removeEvent } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';

const mapStateToProps = ({ events, search, session }) => {
  return {
    events: selectEvents(events, search),
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEvent: (eventId) => dispatch(saveEvent(eventId)),
    unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
    fetchSavedEvents: () => dispatch(fetchSavedEvents()),
    removeEvent: (eventId) => dispatch(removeEvent(eventId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSavedEvents);
