import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCategories,
  getPopularRecipes,
  getRecipeById,
  getRecipesFavorite,
  getRecipesMainPage,
  getRecipesByTitleQuery,
  getRecipesByIngredientsQuery,
  getIngredients,
  toggleFavoriteRecipesById
} from './recipesOperations';
import { getOwnRecipeById } from 'redux/ownRecipes/ownRecipesOperations';

const recipesInitialState = {
  popularRecipes: [],
  categoryList: [],
  mainPageRecipes: [],
  ingredientsList: [],
  favoriteRecipes: [],
  searchRecipes: [],
  choosedRecipe: {},
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesInitialState,
  extraReducers: builder =>
    builder

      // ------------ Get popular recipes ----------------
      .addCase(getPopularRecipes.pending, handlePending)
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.popularRecipes = action.payload.recipes;
        state.isLoading = false;
      })
      .addCase(getPopularRecipes.rejected, handleRejected)

      // ------------ Get Recipes Main Page ----------------
      .addCase(getRecipesMainPage.pending, handlePending)
      .addCase(getRecipesMainPage.fulfilled, (state, { payload }) => {
        state.mainPageRecipes = Object.entries(payload).reduce(
          (acc, element) => {
            const obj = {
              title: element[0],
              data: element[1],
            };
            return (acc = [...acc, obj]);
          },
          []
        );
        state.isLoading = false;
      })
      .addCase(getRecipesMainPage.rejected, handleRejected)

      // ------------ Get Recipes Favorite ----------------
      .addCase(getRecipesFavorite.pending, handlePending)
      .addCase(getRecipesFavorite.fulfilled, (state, action) => {
        state.favoriteRecipes = action.payload;
        state.isLoading = false;
      })
      .addCase(getRecipesFavorite.rejected, handleRejected)

      // ------------ Toggle Favorite Recipes By Id ----------------
      .addCase(toggleFavoriteRecipesById.pending, handlePending)
      .addCase(toggleFavoriteRecipesById.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(toggleFavoriteRecipesById.rejected, handleRejected)

      // ------------ Get Recipe By Id ----------------
      .addCase(getRecipeById.pending, handlePending)
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.choosedRecipe = action.payload;
        state.isLoading = false;
      })
      .addCase(getRecipeById.rejected, handleRejected)

      // ------------ Get All Categories ----------------
      .addCase(getAllCategories.pending, handlePending)
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload
          .map(result => ({
            id: result._id,
            title: result.title.toLowerCase(),
          }))
          .sort((a, b) => a.title.localeCompare(b.title));
        state.isLoading = false;
      })
      .addCase(getAllCategories.rejected, handleRejected)

      // ------------ Get Recipes ByQuery ----------------
      .addCase(getRecipesByTitleQuery.pending, handlePending)
      .addCase(getRecipesByTitleQuery.fulfilled, (state, { payload }) => {
        state.searchRecipes = payload;
        state.isLoading = false;
      })
      .addCase(getRecipesByTitleQuery.rejected, handleRejected)

      // ------------ Get Ingredients By Query ----------------
      .addCase(getRecipesByIngredientsQuery.pending, handlePending)
      .addCase(getRecipesByIngredientsQuery.fulfilled, (state, { payload }) => {
        state.searchRecipes = payload;
        state.isLoading = false;
      })
      .addCase(getRecipesByIngredientsQuery.rejected, handleRejected)

      // ------------ Get All Ingredients ----------------
      .addCase(getIngredients.pending, handlePending)
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredientsList = action.payload.ingredients;
        state.isLoading = false;
      })
      .addCase(getIngredients.rejected, handleRejected)
  
        // ------------ Get Own Recipe By Id ----------------
      .addCase(getOwnRecipeById.pending, handlePending)
      .addCase(getOwnRecipeById.fulfilled, (state, action) => {
        state.choosedRecipe = action.payload;
        state.isLoading = false;
      })
      .addCase(getOwnRecipeById.rejected, handleRejected)
});

export const recipesReducer = recipesSlice.reducer;
