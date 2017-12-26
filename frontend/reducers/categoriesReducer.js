import React from 'react';
import { RECEIVE_CATEGORIES } from '../actions/category_actions';

const defaultState = Object.freeze({
  categories: null,
});

const categoriesReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }

    default:
      return {
        ...state
      };
  }
};

export default categoriesReducer;
