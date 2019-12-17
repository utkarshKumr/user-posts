import { FETCH_USER, USERS_LIST_LOADED } from './constants';

export const fetchUsers = () => {
  return {
    type: FETCH_USER,
  };
};


export const usersListLoaded = (data) => {
    return {
        type: USERS_LIST_LOADED,
        data,
    }
}