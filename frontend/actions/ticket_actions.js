import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = "RECEIVE_TICKET";

export const receiveTicket = (ticket) => {
  return {
    type: RECEIVE_TICKET,
    ticket
  };
};

export function createTicket(ticket) {
  return (dispatch) => {
    return APIUtil.createTicket(ticket)
      .then(
        (ticket) => dispatch(receiveTicket(ticket)),
        (errors) => dispatch(receiveErrors(errors))
      );
  };
}
