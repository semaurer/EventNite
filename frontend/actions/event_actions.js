import * as APIUtil from '../util/event_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

export function createEvent(event) {
  return (dispatch) => {
    return APIUtil.createEvent(event)
      .then(
        (event) => dispatch(receiveEvent(event)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
}

export function fetchEvent(eventId) {
  return (dispatch) => {
    return APIUtil.fetchEvent(eventId)
      .then(
        (event) => dispatch(receiveEvent(event)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
}
