import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { REMOVE_SAVED_EVENT, RECEIVE_SAVED_EVENT } from '../actions/event_actions';
import { removeSavedEvent } from './selectors';

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

    case RECEIVE_SAVED_EVENT:
      let eventId = action.event.id;
      let newState = Object.assign({}, state);
      newState.currentUser.saved_events.push(eventId);
      return newState;

    case REMOVE_SAVED_EVENT:
      eventId = action.event.id;
      newState = Object.assign({}, state);
      const mergedState = removeSavedEvent(newState, eventId);
      return mergedState;

    default:
     return state;
  }
};

export default sessionReducer;
