import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_EVENTS, REMOVE_EVENT } from '../actions/event_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({
  events: null,
  errors: [],
});

const eventsReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_EVENTS:
      const events = action.events;
      return merge({}, state, { events });

    case REMOVE_EVENT:
      const newState = merge({}, state);
      delete newState.events[action.eventId];
      return newState;

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

export default eventsReducer;
