import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import freeze from 'redux-freeze';
import { reducers } from './reducers';

const middlewares = [logger];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

const middleware = applyMiddleware(...middlewares);
const store = createStore(reducers, middleware);

export { store };
