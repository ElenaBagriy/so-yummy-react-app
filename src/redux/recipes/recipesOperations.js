import { createAsyncThunk } from '@reduxjs/toolkit';
import { RecipesAPI } from '../../services/api/API';

export const getPopularRecipes = createAsyncThunk(
  'recipes/getPopular',
  async (_, thunkAPI) => {
    try {
      const response = await RecipesAPI.getPopularRecipes();
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

export const getRecipesByTitleQuery = createAsyncThunk(
  'recipes/getRecipesByTitleQuery',
  async (formData, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipesByTitleQuery(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesByIngredientsQuery = createAsyncThunk(
  'recipes/getRecipesByIngredientsQuery',
  async (formData, thunkAPI) => {
    try {
      const response = await RecipesAPI.getRecipesByIngredientsQuery(formData);
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
