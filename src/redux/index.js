import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counterSlice';
import * as api from '../apiServices';

export const rootReducer = combineReducers({
  [api.pokemonApi.reducerPath]: api.pokemonApi.reducer,
  [api.placeholderApi.reducerPath]: api.placeholderApi.reducer,
  [api.unsplashApi.reducerPath]: api.unsplashApi.reducer,
  counter: counterReducer,
});

export const persistConfig = {
  key: 'root',
  storage,
};
