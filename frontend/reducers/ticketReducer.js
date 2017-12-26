import React from 'react';
import { merge, assign } from 'lodash';
import { RECEIVE_TICKET } from '../actions/ticket_actions';

const defaultState = Object.assign({
  ticket: null,
});

const ticketReducer = (state = defaultState, action) => {

  switch(action.type) {
    case RECEIVE_TICKET:
      return {
        ...state,
        ticket: action.ticket
      };

    default:
      return {
        ...state
      };
  }
};

export default ticketReducer;
