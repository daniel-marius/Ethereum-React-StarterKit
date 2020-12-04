import { combineReducers } from 'redux';

import counterReducer from './counter.reducer.js';

export default combineReducers({
  counter: counterReducer
});
