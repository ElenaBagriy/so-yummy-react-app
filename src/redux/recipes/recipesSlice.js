import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCategories,
  getIngredients,
  getIngredientsByQuery,
  getRecipeByCategories,
  getRecipeById,
  getRecipes,
  getRecipesByQuery,
  getRecipesFavorite,
  getRecipesMainPage,
  toggleFavoriteRecipesById,
  toggleLikeRecipesStatusById,
} from './recipesOperations';

const recipesInitialState = {
  recipes: [
    {
      _id: '',
      title: '',
      category: '',
      description: '',
      preview: '',
      time: '',
      popularity: null,
      like: true,
      favorite: true,
    },
  ],
  randomRecipes: [],
  categoryList: [],
  ingredientsList: [],
  total: null,
  page: null,
  limit: null,
  sort: 'title',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.isLoading = true;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesInitialState,
  extraReducers: builder =>
    builder

      // ------------ Get all recipes ----------------
      .addCase(getRecipes.pending, handlePending)
      .addCase(getRecipes.fulfilled, (state, action) => {})
      .addCase(getRecipes.rejected, handleRejected)

      // ------------ Get Recipes Main Page ----------------
      .addCase(getRecipesMainPage.pending, handlePending)
      .addCase(getRecipesMainPage.fulfilled, (state, action) => {})
      .addCase(getRecipesMainPage.rejected, handleRejected)

      // ------------ Get Recipes Favorite ----------------
      .addCase(getRecipesFavorite.pending, handlePending)
      .addCase(getRecipesFavorite.fulfilled, (state, action) => {})
      .addCase(getRecipesFavorite.rejected, handleRejected)

      // ------------ Toggle Favorite Recipes By Id ----------------
      .addCase(toggleFavoriteRecipesById.pending, handlePending)
      .addCase(toggleFavoriteRecipesById.fulfilled, (state, action) => {})
      .addCase(toggleFavoriteRecipesById.rejected, handleRejected)

      // ------------ Toggle Like Recipes Status By Id ----------------
      .addCase(toggleLikeRecipesStatusById.pending, handlePending)
      .addCase(toggleLikeRecipesStatusById.fulfilled, (state, action) => {})
      .addCase(toggleLikeRecipesStatusById.rejected, handleRejected)

      // ------------ Get Recipe By Id ----------------
      .addCase(getRecipeById.pending, handlePending)
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipeId = action.payload._id;
      })
      .addCase(getRecipeById.rejected, handleRejected)

      // ------------ Get All Categories ----------------
      .addCase(getAllCategories.pending, handlePending)
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload;
      })
      .addCase(getAllCategories.rejected, handleRejected),
})
  // ------------ Get Recipe By Categories ----------------
  .addCase(getRecipeByCategories.pending, handlePending)
  .addCase(getRecipeByCategories.fulfilled, (state, action) => {})
  .addCase(getRecipeByCategories.rejected, handleRejected)

  // ------------ Get Recipes ByQuery ----------------
  .addCase(getRecipesByQuery.pending, handlePending)
  .addCase(getRecipesByQuery.fulfilled, (state, action) => {})
  .addCase(getRecipesByQuery.rejected, handleRejected)
  // ------------ Get Ingredients By Query ----------------
  .addCase(getIngredientsByQuery.pending, handlePending)
  .addCase(getIngredientsByQuery.fulfilled, (state, action) => {})
  .addCase(getIngredientsByQuery.rejected, handleRejected)
  // ------------ Get All Ingredients ----------------
  .addCase(getIngredients.pending, handlePending)
  .addCase(getIngredients.fulfilled, (state, action) => {
    state.ingredientsList = action.payload.ingredients;
  })
  .addCase(getIngredients.rejected, handleRejected);

export const recipesReducer = recipesSlice.reducer;
