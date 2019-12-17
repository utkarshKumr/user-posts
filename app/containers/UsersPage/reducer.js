import { USERS_LIST_LOADED } from './constants';
export const initialState = {
  list: [],
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_LOADED:
      return { ...state, list: action.data };
    default:
      return state;
  }
};

export default users;
