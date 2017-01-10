import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { receiveSearch } from '../../actions/search_actions';
import { fetchEvents, saveEvent, unsaveEvent } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  let userSavedEvents = [];
  if (state.session.currentUser) {
    userSavedEvents = state.session.currentUser.saved_events;
  }

  return {
    events: selectEvents(state),
    currentUser: state.session.currentUser,
    savedEvents: userSavedEvents,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      receiveSearch: (search) => dispatch(receiveSearch(search)),
      fetchEvents: () => dispatch(fetchEvents()),
      saveEvent: (eventId) => dispatch(saveEvent(eventId)),
      unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
