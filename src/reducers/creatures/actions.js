import { API_URL } from '../../constants/index';

export const SET_CREATURES = 'SET_CREATURES';

export function getCreatures() {
  return dispatch =>
    fetch(`${API_URL}/creatures/creatures.json`)
      .then(res => res.json())
      .then(res => res.results)
      .then(creatures =>
        dispatch(setCreatures(creatures))
      );
}

export function setCreatures(creatures) {
  return {
    type: SET_CREATURES,
    creatures,
  };
}
