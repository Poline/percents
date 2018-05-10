import { combineReducers } from 'redux';
import main from './main';
import data from './data';

const rootReducer = combineReducers({
  main,
  data,
});

export default rootReducer;
