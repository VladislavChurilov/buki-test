import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import reducer from './reducer';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: { chat: reducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
