import axios from 'axios'
export const FETCH_DETAIL = 'FETCH_DETAIL';

export function fetchDetail(id) {
  const request = axios.get('/api/post/'+id+'?format=json');
  return {
    type: FETCH_DETAIL,
    payload: request
  }
}