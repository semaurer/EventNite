import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { receiveSearch } from '../../actions/search_actions';
import { fetchEvents } from '../../actions/event_actions';
import { selectEvents } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    events: selectEvents(state),
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      receiveSearch: (search) => dispatch(receiveSearch(search)),
      fetchEvents: () => dispatch(fetchEvents()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
