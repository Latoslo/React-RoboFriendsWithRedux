import { CHANGE_SEARCH_FIELD } from "../src/constants";

const initialStateSearch = {
  searchField: ""
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      // return Object.assign({}, state, (searchField: action.payload));
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
