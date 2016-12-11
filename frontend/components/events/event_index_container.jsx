import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { selectEvents } from '../../reducers/selectors';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => {
  return {
    events: selectEvents(state),
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
)(EventIndex);
