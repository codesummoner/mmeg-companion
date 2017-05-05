import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import skills from './skills';

export default combineReducers({
  id,
  profile,
  skills,
});
