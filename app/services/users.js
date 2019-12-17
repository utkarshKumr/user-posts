import queryString from 'query-string';
import cfg from '../config';
import { get } from '../utils/remote';

const { USERS_API, API_BASE_URL } = cfg;

export const usersList = async () => {
  const params = {
    url: `${API_BASE_URL}${USERS_API}`,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return get(params);
};
