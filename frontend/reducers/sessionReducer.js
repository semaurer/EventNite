import React from 'react';
import { CLEAR_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_ERRORS, SWAP_MODAL_DISPLAY } from '../actions/session_actions';
import { REMOVE_SAVED_EVENT, RECEIVE_SAVED_EVENT } from '../actions/event_actions';
import { removeSavedEvent } from './selectors';

const defaultState = Object.freeze({
  currentUser: null,
  errors: [],
  displayingSignUpForm: true
});

const sessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
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
      };

    case RECEIVE_SAVED_EVENT:
      let eventId = action.event.id;
      let newState = {
        ...state,
      };
      newState.currentUser.saved_events.push(eventId);
      return newState;

    case REMOVE_SAVED_EVENT:
      eventId = action.event.id;
      newState = {
        ...state,
      };
      const mergedState = removeSavedEvent(newState, eventId);
      return mergedState;

    case SWAP_MODAL_DISPLAY:
      return {
        ...state,
        displayingSignUpForm: action.displayingSignUpForm
      };

    default:
     return state;
  }
};

export default sessionReducer;
