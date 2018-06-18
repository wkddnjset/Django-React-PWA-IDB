import axios from 'axios'

// Fetch post
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';

// Get Post Data
export function fetchPost(id) {
  const request = axios.get('/api/post/'+id+'?format=json');
  return {
    type: FETCH_POST,
    payload: request
  }
}

// Success to Get Post Data
export function fetchPostSuccess(activePost) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activePost
  };
}

// Fail to Get Post Data
export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

// Reset to Post Data
export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST
  }
}