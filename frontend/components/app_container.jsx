import React from 'react';
import { connect } from 'react-redux';
import App from './app';
import { logOut, clearErrors } from '../actions/session_actions';
import { receiveSearch, resetSearch } from '../actions/search_actions';
import { clearEvent, clearEvents } from '../actions/event_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    curPath: window.location.hash,
    loggedIn: Boolean(session.currentUser),
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
