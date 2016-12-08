import React from 'react';
import { connect } from 'react-redux';
import App from './app';
import { signUp, logIn,
  logOut, clearErrors } from '../actions/session_actions';

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
      clearErrors: (errors) => dispatch(clearErrors()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
