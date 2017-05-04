import { API_URL } from '../../constants/index';

export const SET_CURRENT_CREATURE = 'SET_CURRENT_CREATURE';
export const SET_CREATURE_PROFILE = 'SET_CREATURE_PROFILE';
//export const SET_CREATURE_WORLD = 'SET_CREATURE_WORLD';
export const SET_CREATURE_SKILLS = 'SET_CREATURE_SKILLS';

export function setCurrentCreature(id) {
  return {
    type: SET_CURRENT_CREATURE,
    id,
  };
}

export function setCreatureProfile(profile) {
  return {
    type: SET_CREATURE_PROFILE,
    profile,
  };
}

export function getCreatureProfile(id) {
  return dispatch =>
    fetch(`${API_URL}/creatures/${id}.json`)
      .then(res => res.json())
      .then(profile => {
        dispatch(setCreatureProfile(profile));
        //dispatch(getCreatureWorld(profile.homeworld));
        dispatch(getCreatureSkills(profile.skills));
      });
}

/*
export function setCreatureWorld(world) {
  return {
    type: SET_CREATURE_WORLD,
    world,
  };
}

export function getCreatureWorld(url) {
  return dispatch =>
    fetch(url)
      .then(res => res.json())
      .then(world =>
        dispatch(setCreatureWorld(world))
      );
}
 */

export function setCreatureSkills(skills) {
  return {
    type: SET_CREATURE_SKILLS,
    skills,
  };
}

export function getCreatureSkills(skillsUrls) {
  return dispatch =>
    Promise.all(skillsUrls.map(skillUrl =>
      fetch(skillUrl)
        .then(res => res.json())
    ))
    .then(skills =>
      dispatch(setCreatureSkills(skills))
    );
}
