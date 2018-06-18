import axios from 'axios'
//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const RESET_POSTS = 'RESET_POSTS';

// Get PostList Data
export function fetchPosts() {
  const request = axios.get('/api/post/?format=json');
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

// Success to Get PostList Data
export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

// Fail to Get PostList Data
export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}