import { FETCH_POST, FETCH_POST_SUCCESS,  FETCH_POST_FAILURE, RESET_ACTIVE_POST } from '../actions/getPostDetail';

const initialState = {
    activePost:{post:null, error:null, loading: false},
};


export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_POST:
			return Object.assign({}, state, {
				activePost:{post:action.payload.data, error:null, loading: true},
            });
		default:
			return state;
	}
}