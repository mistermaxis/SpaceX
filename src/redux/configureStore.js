import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducers = combineReducers({ missionsReducer, rocketsReducer });

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
