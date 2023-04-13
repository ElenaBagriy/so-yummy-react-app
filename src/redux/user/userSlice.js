import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  refreshToken,
  registerUser,
  updateUser,
  getShoppingList,
  addProduct,
  updateProduct,
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
  isLoading: false,
  error: null,
  shoppingList: [
    {
      productId: '',
      title: '',
      thumb: '',
      measure: [],
    },
  ],
  subscribeList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder =>
    builder

      // ------------ Register user ----------------
      .addCase(registerUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Login user ----------------
      .addCase(loginUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Logout user ----------------
      .addCase(logoutUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
        };
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Refresh token ----------------
      .addCase(refreshToken.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoading = false;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Refresh user ----------------
      .addCase(refreshUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
        };
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Update user ----------------
      .addCase(updateUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Get Shopping List ----------------
      .addCase(getShoppingList.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getShoppingList.fulfilled, (state, action) => {
        state.shoppingList = action.payload.shoppingList;
        state.isLoading = false;
      })
      .addCase(getShoppingList.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Add Product ----------------
      .addCase(addProduct.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.shoppingList = action.payload.shoppingList;
        state.isLoading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })

      // ------------ Update Product ----------------
      .addCase(updateProduct.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.shoppingList = action.payload.shoppingList;
        state.isLoading = false;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      })
      // ------------ Subscribe ----------------
      .addCase(subscribe.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.subscribeList = action.payload.subscribeList;
        state.isLoading = false;
      })
      .addCase(subscribe.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
      }),
});

export const userReducer = userSlice.reducer;
