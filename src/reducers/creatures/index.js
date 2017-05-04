import { SET_CREATURES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  console.log('reducers/creatures/index',action);
  switch (action.type) {
    case SET_CREATURES:
      return action.creatures;
    default:
      return state;
  }
};
