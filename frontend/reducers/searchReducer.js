import React from 'react';
import { RECEIVE_SEARCH, RESET_SEARCH } from '../actions/search_actions';

const defaultState = Object.freeze({
  search: "",
});

const searchReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_SEARCH:
      return {
        ...state,
        search: action.search
      };

    case RESET_SEARCH:
      return {
        ...state,
        search: ''
      };

    default:
      return {
        ...state
      };
  }
};

export default searchReducer;
