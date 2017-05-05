import { SET_CREATURES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATURES:
      return action.creatures;
    default:
      return state;
  }
};
