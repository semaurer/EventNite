import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_CATEGORIES } from '../actions/category_actions';

const defaultState = Object.freeze({
  categories: null,
});

const categoriesReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_CATEGORIES:
      const categories = action.categories;
      const oldState = Object.assign({}, state, { categories });
      return oldState;

    default:
      return state;
  }
};

export default categoriesReducer;
