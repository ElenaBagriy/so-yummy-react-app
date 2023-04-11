import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/RecipesAPI";


export const registerUser = createAsyncThunk(
    "auth/register",
    async (formData, thunkAPI) => {
      try {
        const response = await UserAPI.register(formData);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const loginUser = createAsyncThunk(
    "auth/login",
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
    "auth/logout",
    async (token, thunkAPI) => {
      try {
        const response = await UserAPI.logout(token);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const refreshToken = createAsyncThunk(
    "auth/refreshToken",
    async (token, thunkAPI) => {
      try {
        const response = await UserAPI.refreshToken(token);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const refreshUser = createAsyncThunk(
    "auth/refreshUser",
    async (token, thunkAPI) => {
      try {
        const response = await UserAPI.refreshUser(token);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);