import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
  errors: [],
});

const sessionReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
     const currentUser = action.currentUser;
     return merge({}, state, { currentUser });

    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      errors = [];
      return Object.assign({}, state, { errors });
    default:
     return state;
  }
};

export default sessionReducer;
