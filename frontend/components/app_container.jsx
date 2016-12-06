import React from 'react';
import { connect } from 'react-redux';
import App from './app';
import { signUp, logIn, logOut } from '../actions/session_actions';

const mapStateToProps = (state) => {

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {

    return {
      signUp: (user) => dispatch(signUp(user)),
      logIn: (user) => dispatch(logIn(user)),
      logOut: () => dispatch(logOut(user)),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
