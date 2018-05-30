import { FETCH_POST } from '../actions/getPostList';

const initialState = {
    postList: [],
};


export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_POST:
			return Object.assign({}, state, {
                postList: action.payload.data
            });
		default:
			return state;
	}
}