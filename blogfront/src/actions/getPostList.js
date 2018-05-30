import axios from 'axios'
export const FETCH_POST = 'FETCH_POST';

export function fetchPost() {
  const request = axios.get('/api/post/?format=json');
  return {
    type: FETCH_POST,
    payload: request
  }
}