import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { fetchMessages } from './operations';

const messages = createReducer([], {
  [fetchMessages.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchMessages.pending]: () => true,
  [fetchMessages.fulfilled]: () => false,
  [fetchMessages.rejected]: () => false,
  //   [fetchNextPage.pending]: () => true,
  //   [fetchNextPage.fulfilled]: () => false,
  //   [fetchNextPage.rejected]: () => false,
  //   [fetchFilteredProducts.pending]: () => true,
  //   [fetchFilteredProducts.fulfilled]: () => false,
  //   [fetchFilteredProducts.rejected]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  messages,
  loading,
  error,
});
