import * as APIUtil from '../util/categoryAPIUtil';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  };
};

export function fetchCategories() {
  return (dispatch) => {
    return APIUtil.fetchCategories()
      .then(
        (categories) => dispatch(receiveCategories(categories))
      );
  };
}
