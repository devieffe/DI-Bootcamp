import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.userData = action.payload;
    },
    fetchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;


export const fetchUserData = () => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};

