import React from 'react';
import { RECEIVE_EVENTS, REMOVE_EVENT, REMOVE_EVENTS, CLEAR_EVENTS } from '../actions/event_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({
  events: null,
  errors: [],
});

const eventsReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_EVENTS:
      return {
        ...state,
        events: action.events
      }

    case REMOVE_EVENT:
      const newState = {
        ...state,
      };
      delete newState.events[action.eventId];
      return {
        ...newState
      };

    case REMOVE_EVENTS:
      return {
        ...state,
        events: []
      }

    case CLEAR_EVENTS:
      return {
        ...defaultState,
      };

    case RECEIVE_ERRORS:
      return {
        ...state,
        errors: action.errors
      };

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

export default eventsReducer;
