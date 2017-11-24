import React from 'react';
import { connect } from 'react-redux';
import App from './app';
import { signUp, logIn, logOut, clearErrors } from '../actions/session_actions';
import { receiveSearch, resetSearch } from '../actions/search_actions';
import { clearEvent, clearEvents } from '../actions/event_actions';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    errors: session.errors,
    curPath: window.location.hash,
    loggedIn: Boolean(session.currentUser),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    clearEvent: () => dispatch(clearEvent()),
    clearEvents: () => dispatch(clearEvents()),
    logIn: (user) => dispatch(logIn(user)),
    logOut: () => dispatch(logOut()),
    receiveSearch: (search) => dispatch(receiveSearch(search)),
    resetSearch: () => dispatch(resetSearch()),
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
