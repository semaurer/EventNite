import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_NEW_EVENT } from '../actions/event_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({
  event: null,
  errors: [],
});

const eventReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_NEW_EVENT:
      const event = action.event;
      return merge({}, state, { event });

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

export default eventReducer;
