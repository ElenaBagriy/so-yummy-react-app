import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/RecipesAPI";


export const registerUser = createAsyncThunk(
    "user/register",
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
    "user/login",
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
    "user/logout",
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
    "user/refreshToken",
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
    "user/refreshUser",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const savedToken = state.user.accessToken;
        if (!savedToken) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        };

      try {
        const response = await UserAPI.refreshUser(savedToken);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (formData, thunkAPI) => {
      try {
        const response = await UserAPI.update(formData);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const getShoppingList = createAsyncThunk(
    "user/getShoppingList",
    async (_, thunkAPI) => {
      try {
        const response = await UserAPI.getShoppingList();
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
  
export const addProduct = createAsyncThunk(
    "user/addProduct",
    async (formData, thunkAPI) => {
      try {
        const response = await UserAPI.addToShoppingList(formData);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
  
export const updateProduct = createAsyncThunk(
    "user/updateProduct",
    async (formData, thunkAPI) => {
      try {
        const response = await UserAPI.updateShoppingList(formData);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const subscribe = createAsyncThunk(
    "user/subscribe",
    async (formData, thunkAPI) => {
      try {
        const response = await UserAPI.updateUserInfoForSubscribe(formData);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );