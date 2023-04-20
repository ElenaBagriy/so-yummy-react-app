
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from "../../services/api/API";

export const fetchShoppingList = createAsyncThunk(
  'shopping-list/all',
  async (_, thunkAPI) => {
    try {
      const {shoppingList} = await UserAPI.getShoppingList();
      return shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProductToShoppingList = createAsyncThunk(
  'shopping-list/add',

  async (product, thunkAPI) => {
    try {
      const {shoppingList} = await UserAPI.addToShoppingList(product);
      return shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProductFromShoppingList = createAsyncThunk(
  'shopping-list/remove',
  async (product, thunkAPI) => {
    const measure = product.measure.join();
    const productId = product.productId;
    try {
      const {shoppingList} = await UserAPI.updateShoppingList({productId, measure});
      return shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);