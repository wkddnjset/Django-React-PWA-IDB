import { combineReducers } from 'redux';
import PostsReducer from './reducer_lists';
import PostReducer from './reducer_detail';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
  form: formReducer
});
export default rootReducer;