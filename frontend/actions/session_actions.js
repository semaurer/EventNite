import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export function logIn(user) {
  return (dispatch) => {
    return APIUtil.logIn(user)
      .then(
        (currentUser) => dispatch(receiveCurrentUser(currentUser)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
}

export function logOut () {
  return (dispatch) => {
    return APIUtil.logOut()
      .then(
        () => dispatch(receiveCurrentUser(null)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
}

export function signUp(user) {
  return (dispatch) => {
    return APIUtil.signUp(user)
      .then(
        (currentUser) => dispatch(receiveCurrentUser(currentUser)),
        (errors) => dispatch(receiveErrors(errors.responseJSON))
      );
  };
}
