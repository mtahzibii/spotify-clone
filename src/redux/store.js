import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
 reducer: {
  player: playerReducer,
  [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
 },

 middleware: (curryGetDefaultMiddleware) =>
  curryGetDefaultMiddleware().concat(shazamCoreApi.middleware),
});
