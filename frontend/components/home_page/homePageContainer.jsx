import React from 'react';
import { connect } from 'react-redux';
import HomePage from './homePage';
import { receiveSearch } from '../../actions/search_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    receiveSearch: (search) => dispatch(receiveSearch(search)),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
