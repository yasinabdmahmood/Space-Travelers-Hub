import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk(
  'getRockets/',
  async () => {
    try {
      return axios.get(baseUrl);
    } catch (error) {
      return error;
    }
  },
);

const initialState = [];

export const rockestSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReservation(state, action) {
      const newState = state.map((el) => (
        el.id === action.payload
          ? { ...el, reserved: !el.reserved } : el));
      return newState;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const rockets = action.payload.data.map((el) => ({
        id: el.id,
        rocket_name: el.rocket_name,
        description: el.description,
        flickr_images: el.flickr_images[0],
        reserved: true,
      }));
      return rockets;
    });
  },
});
export const { toggleReservation } = rockestSlice.actions;
export default rockestSlice.reducer;
