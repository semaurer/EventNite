import React from 'react';
import { connect } from 'react-redux';
import ManageEvents from './manage_events';
import { fetchEvents } from '../../actions/event_actions';
import { selectCurrentUserEvents } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUserEvents: selectCurrentUserEvents(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageEvents);
