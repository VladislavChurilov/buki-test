import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL =
//     'https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8';

export const fetchMessages = createAsyncThunk(
  'message/fetchMessage',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8',
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
