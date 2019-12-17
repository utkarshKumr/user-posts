/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const users = state => state.users || initialState;

const makeUsersList = () =>
  createSelector(
    users,
    usersState => usersState.list,
  );

export { users, makeUsersList };
