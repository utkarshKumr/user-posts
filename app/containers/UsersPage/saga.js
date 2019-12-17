import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER } from './constants';
import { usersListLoaded } from './actions';
import { usersList } from 'services/users';

/**
 * Github repos request/response handler
 */
export function* getUsersList() {
  try {
    const data = yield call(usersList);
    const response = yield data.json();
    yield put(usersListLoaded(response));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* usersFetchWatcher() {
  yield takeLatest(FETCH_USER, getUsersList);
}
