import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_EVENTS, REMOVE_EVENT, REMOVE_EVENTS,
  CLEAR_EVENTS } from '../actions/event_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({
  events: null,
  errors: [],
});

const eventsReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_EVENTS:
      const events = action.events;
      let newState = Object.assign({}, state, { events: events });
      return newState;

    case REMOVE_EVENT:
      newState = merge({}, state);
      delete newState.events[action.eventId];
      return newState;

    case REMOVE_EVENTS:
      newState = merge({}, state);
      delete newState.events;
      return newState;

    case CLEAR_EVENTS:
      return defaultState;

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
