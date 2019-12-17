import 'isomorphic-fetch';
import { stringify } from 'query-string';

export const get = async ({ url = '', headers = {}, queryParams = {} }) => {
  const API_URL = `${url}?${stringify(queryParams, {
    arrayFormat: 'bracket',
  })}`;
  return fetch(API_URL, {
    method: 'GET',
    headers,
  });
};

export const put = async ({
  url = '',
  headers = {},
  queryParams = {},
  jsonBody = {},
}) => {
  const API_URL = `${url}${queryParams && `?${stringify(queryParams)}`}`;

  return fetch(API_URL, {
    method: 'PUT',
    headers,
    body: JSON.stringify(jsonBody),
  });
};

export const post = async ({
  url = '',
  headers = {},
  queryParams = {},
  jsonBody = {},
}) => {
  const API_URL = `${url}${queryParams && `?${stringify(queryParams)}`}`;

  return fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(jsonBody),
  });
};
