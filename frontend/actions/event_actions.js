import * as APIUtil from '../util/event_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const REMOVE_EVENTS = "REMOVE_EVENTS";

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

export const removeEvent = (eventId) => {
  return {
    type: REMOVE_EVENT,
    eventId
  };
};

export const removeEvents = () => {
  return {
    type: REMOVE_EVENTS,
  };
};

export function createEvent(event, catIds) {
  return (dispatch) => {
    return APIUtil.createEvent(event, catIds)
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

export function fetchEvents() {
  return (dispatch) => {
    return APIUtil.fetchEvents()
      .then(
        (events) => dispatch(receiveEvents(events)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
}

export function categoryFilterFetchEvents(catId) {
  return (dispatch) => {
    return APIUtil.categoryFilterFetchEvents(catId)
      .then(
        (events) => dispatch(receiveEvents(events)),
        (errors) => dispatch(receiveErrors(errors))
      );
  };
}

export function updateEvent(event, eventId) {
  return (dispatch) => {
    return APIUtil.updateEvent(event, eventId)
      .then(
        (event) => dispatch(receiveEvent(event)),
        (errors) => dispatch(receiveErrors(errors))
      );
  };
}

export function deleteEvent(eventId) {
  return (dispatch) => {
    return APIUtil.deleteEvent(eventId)
      .then(
        (eventId) => dispatch(removeEvent(eventId)),
        (errors) => dispatch(receiveErrors(errors))
      );
  };
}
