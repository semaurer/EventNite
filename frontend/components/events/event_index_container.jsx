import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { selectEvents } from '../../reducers/selectors';
import { fetchEvents,
  categoryFilterFetchEvents, removeEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { selectCategories } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    events: selectEvents(state),
    categories: selectCategories(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchCategories: () => dispatch(fetchCategories()),
    categoryFilterFetchEvents: (catId) => dispatch(categoryFilterFetchEvents(catId)),
    removeEvents: () => dispatch(removeEvents()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
