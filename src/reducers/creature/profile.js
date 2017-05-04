import { SET_CREATURE_PROFILE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  console.log('reducers/creature/profile',action.type);
  switch (action.type) {
    case SET_CREATURE_PROFILE:
      return action.profile;
    default:
      return state;
  }
};
