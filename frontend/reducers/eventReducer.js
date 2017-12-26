import React from 'react';
import { RECEIVE_EVENT, CLEAR_EVENT } from '../actions/event_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({
  event: null,
  errors: [],
});

const eventReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_EVENT:
      return {
        ...state,
        event: action.event
      }

    case CLEAR_EVENT:
      return {
        ...defaultState
      };

    case RECEIVE_ERRORS:
      return {
        ...state,
        errors: action.errors
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      }

    default:
      return {
        ...state
      };
  }
};

export default eventReducer;
