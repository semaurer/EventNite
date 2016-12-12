import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_TICKET } from '../actions/ticket_actions';

const defaultState = Object.assign({
  ticket: null,
});

const ticketReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_TICKET:
      const ticket = action.ticket;
      const oldState = merge({}, state, { ticket });
      return oldState;
      
    default:
      return state;
  }
};
