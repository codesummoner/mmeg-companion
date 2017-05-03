/**
 * Information Architecture
 *
 * root
 *   -| home
 *   -| creatures
 *   -| skills
 *   -| stats
 *   -| report
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { creatures } from './data/creatures';
import { skills } from './data/skills';

import App from './components/App';

const creaturesReducer = (state = creatures, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const skillsReducer = (state = skills, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  creatures: creaturesReducer,
  skills: skillsReducer
});

const store = createStore(
  reducer
);

ReactDOM.render(
  <App store={ store } />,
  document.getElementById('root')
);
