import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCategories,
  getRecipes,
  getRecipeByCategories,
  getRecipeById,
  getRecipesFavorite,
  getRecipesMainPage,
  getRecipesByTitleQuery,
  getRecipesByIngredientsQuery,
  getIngredients,
  toggleFavoriteRecipesById,
  toggleLikeRecipesStatusById,
} from './recipesOperations';

const recipesInitialState = {
  recipe: [],
  randomRecipes: [],
  userFavouritesRecipes: [],
  categoryList: [],
  ingredientsList: [],
  recipeIsLoading: false,
  userFavoritesIsLoading: false,
  total: null,
  page: null,
  limit: null,
  sort: 'title',
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

      // ------------ Get all recipes ----------------
      .addCase(getRecipes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ------------ Get Recipes Main Page ----------------
      .addCase(getRecipesMainPage.pending, handlePending)
      .addCase(getRecipesMainPage.fulfilled, (state, action) => { })
      .addCase(getRecipesMainPage.rejected, handleRejected)

      // ------------ Get Recipes Favorite ----------------
      .addCase(getRecipesFavorite.pending, (state, action) => {
        state.userFavoritesIsLoading = true;
        state.error = action.payload;
      })
      .addCase(getRecipesFavorite.fulfilled, (state, action) => {  ////check if proper
        state.userFavoritesIsLoading = false;
        state.error = null;
        state.userFavouritesRecipes = action.payload.recipes
      })
      .addCase(getRecipesFavorite.rejected, (state, action) => {
        state.userFavoritesIsLoading = false;
        state.error = action.payload;
      })

      // ------------ Toggle Favorite Recipes By Id ----------------
      .addCase(toggleFavoriteRecipesById.pending, handlePending)
      .addCase(toggleFavoriteRecipesById.fulfilled, (state, action) => {  ////check if proper
        state.isLoading = false;
      })
      .addCase(toggleFavoriteRecipesById.rejected, handleRejected)

      // ------------ Toggle Like Recipes Status By Id ----------------
      .addCase(toggleLikeRecipesStatusById.pending, handlePending)
      .addCase(toggleLikeRecipesStatusById.fulfilled, (state, action) => { })
      .addCase(toggleLikeRecipesStatusById.rejected, handleRejected)

      // ------------ Get Recipe By Id ----------------
      .addCase(getRecipeById.pending, (state, action) => {
        state.recipeIsLoading = true;
        state.error = action.payload;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipeIsLoading = false;
        state.error = null;
        state.recipe = action.payload
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.recipeIsLoading = false;
        state.error = action.payload;
      })

      // ------------ Get All Categories ----------------
      .addCase(getAllCategories.pending, handlePending)
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload;
      })
      .addCase(getAllCategories.rejected, handleRejected)

      // ------------ Get Recipe By Categories ----------------
      .addCase(getRecipeByCategories.pending, handlePending)
      .addCase(getRecipeByCategories.fulfilled, (state, action) => { })
      .addCase(getRecipeByCategories.rejected, handleRejected)

      // ------------ Get Recipes ByQuery ----------------
      .addCase(getRecipesByTitleQuery.pending, handlePending)
      .addCase(getRecipesByTitleQuery.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, ...payload }
       })
      .addCase(getRecipesByTitleQuery.rejected, handleRejected)
      // ------------ Get Ingredients By Query ----------------
      .addCase(getRecipesByIngredientsQuery.pending, handlePending)
      .addCase(getRecipesByIngredientsQuery.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, ...payload };
      })
      .addCase(getRecipesByIngredientsQuery.rejected, handleRejected)
      // ------------ Get All Ingredients ----------------
      .addCase(getIngredients.pending, handlePending)
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredientsList = action.payload.ingredients;
      })
      .addCase(getIngredients.rejected, handleRejected)

});

export const recipesReducer = recipesSlice.reducer;
