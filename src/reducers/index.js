// Import necessary functions and modules from Redux and reducers
import { combineReducers } from 'redux';
import postCreateUserReducer from './postCreateUserReducer';
import postCreateEmailReducer from './postCreateEmailReducer';

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  postCreateUser: postCreateUserReducer,
  postCreateEmail: postCreateEmailReducer,
});

// Export the rootReducer
export default rootReducer;
