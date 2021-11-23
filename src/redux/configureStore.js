import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions.js';

const reducers = combineReducers({ missionsReducer });

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;