import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './rockets/rocketReducer';

const rootReducer = combineReducers({
  rockets: rocketReducer,

});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['getRockets//fulfilled'],
    },
  }).concat(logger),
});

export default store;
