import * as APIUtil from '../util/event_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";

export const receiveNewEvent = event => {
  return {
    type: RECEIVE_NEW_EVENT,
    event
  };
};

export function createEvent(event) {
  return (dispatch) => {
    return APIUtil.createEvent(event)
      .then(
        (event) => dispatch(receiveNewEvent(event)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
}
