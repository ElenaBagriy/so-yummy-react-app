import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  refreshToken,
  registerUser,
  updateUser,
  subscribe,
} from './userOperations';

const userInitialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  error: null,
  subscribeList: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
  state.isRefreshing = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder =>
    builder

      // ------------ Register user ----------------
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, handleRejected)

      // ------------ Login user ----------------
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, handleRejected)

      // ------------ Logout user ----------------
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = true;
        state.isLoading = false;
        state.error = null;
        state.subscribeList = [];
      })
      .addCase(logoutUser.rejected, handleRejected)

      // ------------ Refresh token ----------------
      .addCase(refreshToken.pending, handlePending)
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoading = false;
      })
      .addCase(refreshToken.rejected, handleRejected)

      // ------------ Refresh user ----------------
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          avatarURL: action.payload.avatarURL,
        };
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isRefreshing = false;
      })

      // ------------ Update user ----------------
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.avatarURL = action.payload.avatar;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, handleRejected)

      // ------------ Subscribe ----------------
      .addCase(subscribe.pending, handlePending)
      .addCase(subscribe.fulfilled, (state, action) => {
        state.subscribeList = action.payload.email;
        state.isLoading = false;
      })
      .addCase(subscribe.rejected, handleRejected),
});

export const userReducer = userSlice.reducer;
