import { SET_CREATURE_SKILLS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATURE_SKILLS:
      return action.skills.sort((ma, mb) =>
        ma.id - mb.id
      );
    default:
      return state;
  }
};
