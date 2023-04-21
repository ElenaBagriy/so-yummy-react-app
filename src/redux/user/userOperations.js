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
      console.log(formData);
      const response = await UserAPI.subscribe(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
