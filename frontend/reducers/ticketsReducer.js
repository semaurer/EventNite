import React from 'react';
import { RECEIVE_TICKETS } from '../actions/ticket_actions';

const defaultState = Object.assign({
  tickets: null,
});

const ticketsReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_TICKETS:
      return {
        ...state,
        tickets: action.tickets
      }

    default:
      return {
        ...state
      };
  }
};

export default ticketsReducer;
