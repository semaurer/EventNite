import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import receiveSearch from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      receiveSearch: (search) => dispatch(receiveSearch(search)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
