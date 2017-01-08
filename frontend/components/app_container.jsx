import React from 'react';
import { connect } from 'react-redux';
import App from './app';
import { signUp, logIn,
  logOut, clearErrors } from '../actions/session_actions';
import { receiveSearch, resetSearch } from '../actions/search_actions';

const mapStateToProps = ({ session }) => {

  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {

    return {
      signUp: (user) => dispatch(signUp(user)),
      logIn: (user) => dispatch(logIn(user)),
      logOut: () => dispatch(logOut()),
      receiveSearch: (search) => dispatch(receiveSearch(search)),
      resetSearch: () => dispatch(resetSearch()),
      clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
