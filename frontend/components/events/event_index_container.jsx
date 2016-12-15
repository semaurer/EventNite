import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { selectEvents } from '../../reducers/selectors';
import { fetchEvents, saveEvent, unsaveEvent,
  categoryFilterFetchEvents, removeEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { selectCategories } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    events: selectEvents(state),
    categories: selectCategories(state),
    savedEvents: state.session.currentUser.savedEvents
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
