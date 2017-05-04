/**
 * Information Architecture
 *
 * root
 *   -| home
 *   -| creatures
 *   -| skills
 *   -| stats
 *   -| report error
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getCreatures } from './reducers/creatures/actions';

import App from './components/App';

/*
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
 */


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(getCreatures());

ReactDOM.render(
  <Provider store={ store }>
    <App store={ store } />
  </Provider>,
  document.getElementById('root')
);
