import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { addMessageAction } from './actions';

export const fetchMessages = createAsyncThunk(
  'message/fetchMessage',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8',
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addMessage = text => dispatch => {
  const id = uuidv4();
  const user = 'Taylor';
  const avatar = 'https://i.pravatar.cc/300?img=12';
  const created_at = new Date().toLocaleString();
  let message = text;
  const messageObj = { id, user, avatar, created_at, message };
  return dispatch(addMessageAction(messageObj));
};
