import { combineReducers } from 'redux';
import reducer from '../reducers';

export const reducers = combineReducers({
  home: reducer.home
});
