import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const RECEIVE_TICKETS = "RECEIVE_TICKETS";

export const receiveTicket = (ticket) => {
  return {
    type: RECEIVE_TICKET,
    ticket
  };
};

export const receiveTickets = (tickets) => {
  return {
    type: RECEIVE_TICKETS,
    tickets
  };
};

export function createTicket(ticket) {
  return (dispatch) => {
    return APIUtil.createTicket(ticket)
      .then(
        (ticket) => dispatch(receiveTicket(ticket))
      );
  };
}

export function fetchTickets() {
  return (dispatch) => {
    return APIUtil.fetchTickets()
      .then(
        (tickets) => dispatch(receiveTickets(tickets))
      );
  };
}
