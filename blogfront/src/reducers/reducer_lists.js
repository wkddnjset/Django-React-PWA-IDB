import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RESET_POSTS } from '../actions/getPostList';

const initialState = {
    postsList: {posts: [], error:null, loading: false},
};


export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_POSTS:  			// start fetching posts and set loading = true
			return Object.assign({}, state,{
                postList: {posts: action.payload.data, error:null, loading: true}
			});
        case FETCH_POSTS_SUCCESS: 	// return list of posts and make loading = false
			return Object.assign({}, state,{
                postList: {posts: action.payload.data, error:null, loading: false}
            });
        case FETCH_POSTS_FAILURE: 	// return error and make loading = false
			return Object.assign({}, state,{
                postList: {posts: action.payload.data, error:null, loading: false}
            });
        case RESET_POSTS: 			// reset postList to initial state
    		return Object.assign({}, state,{
				postsList: {posts: [], error:null, loading: false} 
			});
		default:
			return state;
	}
}