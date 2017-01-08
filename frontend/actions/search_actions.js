export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RESET_SEARCH = "RESET_SEARCH";

export const receiveSearch = (search) => {
  return {
    type: RECEIVE_SEARCH,
    search
  };
};

export const resetSearch = () => {
  return {
    type: RESET_SEARCH,
  };
};
