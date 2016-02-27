import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';
import rootReducer from './reducers';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(rootReducer);

let rootElement = document.querySelector('.container');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
