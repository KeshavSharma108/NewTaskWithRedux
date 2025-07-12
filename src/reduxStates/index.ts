// reduxStates/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import { authSliceReducer } from './Auth';

export const rootReducer = combineReducers({
  auth: authSliceReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
