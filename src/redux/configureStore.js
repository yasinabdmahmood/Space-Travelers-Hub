import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './rockets/rocketReducer';
import missionReducer from './Missions/missionsReducer';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,

});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['getRockets//fulfilled', 'getMissions//fulfilled'],
    },
  }).concat(logger),
});

export default store;
