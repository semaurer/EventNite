import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { selectEvents } from '../../reducers/selectors';
import { fetchEvents, saveEvent, unsaveEvent,
  categoryFilterFetchEvents, removeEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { selectCategories } from '../../reducers/selectors';
import { resetSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => {

  let userSavedEvents = [];
  if (state.session.currentUser) {
    userSavedEvents = state.session.currentUser.saved_events;
  }

  return {
    events: selectEvents(state.events, state.search),
    categories: selectCategories(state),
    savedEvents: userSavedEvents,
    currentUser: state.session.currentUser,
    search: state.search.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchCategories: () => dispatch(fetchCategories()),
    categoryFilterFetchEvents: (catId) => dispatch(categoryFilterFetchEvents(catId)),
    removeEvents: () => dispatch(removeEvents()),
    saveEvent: (eventId) => dispatch(saveEvent(eventId)),
    unsaveEvent: (eventId) => dispatch(unsaveEvent(eventId)),
    resetSearch: () => dispatch(resetSearch()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
