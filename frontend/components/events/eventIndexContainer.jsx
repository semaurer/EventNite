import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './eventIndex';
import { selectCategories, selectEvents } from '../../reducers/selectors';
import {
  categoryFilterFetchEvents,
  fetchEvents,
  removeEvents,
  saveEvent,
  unsaveEvent,
} from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { resetSearch } from '../../actions/search_actions';

const mapStateToProps = ({ categories, events, search, session}) => {

  let userSavedEvents = [];
  if (session.currentUser) {
    userSavedEvents = session.currentUser.saved_events;
  }

  return {
    events: events.events ? selectEvents(events, search) : [],
    categories: categories.categories ? selectCategories(categories) : [],
    savedEvents: userSavedEvents,
    currentUser: session.currentUser,
    search: search.search,
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

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
