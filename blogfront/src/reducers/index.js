import { combineReducers } from 'redux';
import ListsReducer from './reducer_lists';
import DetailReducer from './reducer_detail';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  lists: ListsReducer,
  detail: DetailReducer,
  form: formReducer
});
export default rootReducer;