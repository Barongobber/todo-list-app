import { createSlice } from '@reduxjs/toolkit';
import { loginUser, fetchUserProfile, logoutUser } from './authThunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      logoutUser();

      state.user = null;
      state.token = null;
      state.status = 'logout';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        const {user, api_token: apiToken} = action.payload;

        state.user = user;
        state.token = apiToken;
        state.status = 'succeeded';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
