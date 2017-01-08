import React from 'react';
import { RECEIVE_SEARCH } from '../actions/search_actions';

const defaultState = Object.freeze({
  search: "",
});

const searchReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_SEARCH:
      return merge({}, state, { search });
    default:
      return state;
  }
};

export default searchReducer;
