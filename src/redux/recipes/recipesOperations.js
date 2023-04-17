import { createAsyncThunk } from '@reduxjs/toolkit';
import { RecipesAPI } from '../../services/api/API';

export const getRecipes = createAsyncThunk(
  'recipes/getAll',
  async (formData, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipes(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesMainPage = createAsyncThunk(
  'recipes/getRecipesMainPage',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipesMainPage();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesFavorite = createAsyncThunk(
  'recipes/getRecipesFavorite',
  async (formData, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipesFavorite(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavoriteRecipesById = createAsyncThunk(
  'recipes/toggleFavoriteRecipesById',
  async (id, thunkAPI) => {
    try {
      const response = await RecipesAPI.toggleFavoriteRecipesById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleLikeRecipesStatusById = createAsyncThunk(
  'recipes/toggleLikeRecipesStatusById',
  async (id, thunkAPI) => {
    try {
      const response = await RecipesAPI.toggleLikeRecipesStatusById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipeById(id);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  'recipes/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getAllCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipeByCategories = createAsyncThunk(
  'recipes/getRecipeByCategories',
  async (formData, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipeByCategories(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesByQuery = createAsyncThunk(
  'recipes/getRecipesByQuery',
  async (formData, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipesByQuery(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredientsByQuery = createAsyncThunk(
  'recipes/getIngredientsByQuery',
  async (formData, thunkAPI) => {
    try {
      const response = await RecipesAPI.getIngredientsByQuery(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredients = createAsyncThunk(
  'recipes/getIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getIngredients();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
