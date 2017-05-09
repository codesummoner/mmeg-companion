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

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));

store.dispatch(getCreatures());

ReactDOM.render(
  <Provider store={ store }>
    <App store={ store } />
  </Provider>,
  document.getElementById('root')
);
