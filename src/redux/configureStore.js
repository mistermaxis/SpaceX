import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions';
import rocketsReducer from './rockets';

const reducers = combineReducers({ missionsReducer, rocketsReducer });

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
