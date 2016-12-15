import React from 'react';
import { connect } from 'react-redux';
import UserSavedEvents from './user_saved_events';
import { saveEvent, unsaveEvent,
  fetchSavedEvents } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';

const mapStateToProps = (state) => {

  return {
    events: selectEvents(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveEvent: (eventId) => dispatch(saveEvent(eventId)),
    unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
    fetchSavedEvents: () => dispatch(fetchSavedEvents()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSavedEvents);
