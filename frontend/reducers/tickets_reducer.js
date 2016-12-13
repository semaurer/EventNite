import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_TICKETS } from '../actions/ticket_actions';

const defaultState = Object.assign({
  tickets: null,
});

const ticketsReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_TICKETS:
      const tickets = action.tickets;
      const oldState = merge({}, state, { tickets });
      return oldState;

    default:
      return state;
  }
};

export default ticketsReducer;
