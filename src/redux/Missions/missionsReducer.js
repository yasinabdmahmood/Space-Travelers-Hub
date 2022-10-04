import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'getMissions/',
  async () => {
    try {
      return axios.get(baseUrl);
    } catch (error) {
      return error;
    }
  },
);

const initialState = [];

export const MissionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleJoining(state, action) {
      const newState = state.map((el) => (
        el.id === action.payload
          ? { ...el, joined: !el.joined } : el));
      return newState;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      const missions = action.payload.data.map((el) => ({
        id: el.mission_id,
        mission_name: el.mission_name,
        description: el.description,
        joined: false,
      }));
      return missions;
    });
  },
});
export const { toggleJoining } = MissionSlice.actions;
export default MissionSlice.reducer;
