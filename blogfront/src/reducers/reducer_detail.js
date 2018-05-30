import { FETCH_DETAIL } from '../actions/getPostDetail';

const initialState = {
    postDeatil: [],
};


export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_DETAIL:
			return Object.assign({}, state, {
                postDeatil: action.payload.data
            });
		default:
			return state;
	}
}