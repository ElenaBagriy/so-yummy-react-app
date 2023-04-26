import { createAsyncThunk } from "@reduxjs/toolkit";
import { OwnRecipesAPI } from "../../services/api/API";


export const getAllOwnRecipes = createAsyncThunk(
    "ownRecipes/getAll",
    async (formData, thunkAPI) => {
      try {
        const response = await OwnRecipesAPI.getAllOwnRecipes(formData);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const addOwnRecipe = createAsyncThunk(
    "ownRecipes/addOwnRecipe",
  async (formData, thunkAPI) => {
      try {
        const response = await OwnRecipesAPI.addOwnRecipe(formData);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const deleteOwnRecipe = createAsyncThunk(
    "ownRecipes/deleteOwnRecipe",
    async (id, thunkAPI) => {
      try {
        const response = await OwnRecipesAPI.deleteOwnRecipe(id);
  
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const getOwnRecipeById = createAsyncThunk(
    "ownRecipes/getOwnRecipeById",
    async (id, thunkAPI) => {
      try {
        const response = await OwnRecipesAPI.getOwnRecipeById(id);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);