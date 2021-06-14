import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { deleteMessage, addMessageAction, editMessage } from './actions';

import { fetchMessages } from './operations';

const messages = createReducer([], {
  [fetchMessages.fulfilled]: (_, { payload }) => payload,
  [addMessageAction]: (state, { payload }) => [...state, payload],
  [deleteMessage]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editMessage]: (state, { payload }) =>
    state.map(messages =>
      messages.id === payload.targetId
        ? { ...messages, message: payload.value }
        : messages,
    ),
});

const loading = createReducer(false, {
  [fetchMessages.pending]: () => true,
  [fetchMessages.fulfilled]: () => false,
  [fetchMessages.rejected]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  messages,
  loading,
  error,
});
