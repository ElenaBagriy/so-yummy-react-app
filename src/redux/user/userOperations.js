import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../../services/api/API';

export const registerUser = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const { user } = await UserAPI.register(formData);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.login(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      await UserAPI.logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/// Новая версия
// export const refreshToken = createAsyncThunk(
//   'user/refreshToken',
//   async (_, thunkAPI) => {

//     try {
//       const response = await UserAPI.refreshToken();
      
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


export const refreshUser = createAsyncThunk(
  'user/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      const response = await UserAPI.refreshUser(state.auth);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.update(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribe = createAsyncThunk(
  'user/subscribe',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.updateUserInfoForSubscribe(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
