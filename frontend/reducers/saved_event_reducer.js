import React from 'react';
import { merge, assign } from 'lodash';
import { REMOVE_SAVED_EVENT, RECEIVE_SAVED_EVENT } from '../actions/event_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({
  savedEvent: null,
  errors: [],
});

const savedEventReducer = (state = defaultState, action) => {

  switch(action.type) {

    case RECEIVE_SAVED_EVENT:
      const event = action.event;
      return merge({}, state, { event });

    case REMOVE_SAVED_EVENT:
      const eventId = action.event.id;
      const newState = merge({}, state);
      delete newState.savedEvent[eventId];
      return newState;

    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, { errors });

    default:
      return state;
  }
};

export default savedEventReducer;
