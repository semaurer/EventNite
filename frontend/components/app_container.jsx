import React from 'react';
import { connect } from 'react-redux';
import App from './app';
import { logOut, clearErrors, swapModalDisplay } from '../actions/session_actions';
import { receiveSearch, resetSearch } from '../actions/search_actions';
import { clearEvent, clearEvents } from '../actions/event_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    curPath: window.location.hash.slice(1),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    clearEvent: () => dispatch(clearEvent()),
    clearEvents: () => dispatch(clearEvents()),
    logOut: () => dispatch(logOut()),
    receiveSearch: (search) => dispatch(receiveSearch(search)),
    resetSearch: () => dispatch(resetSearch()),
    swapModalDisplay: (displayingSignUpForm) => dispatch(swapModalDisplay(displayingSignUpForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
