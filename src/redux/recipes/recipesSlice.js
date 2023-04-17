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
  allRecipes: [
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
      .addCase(getRecipes.pending, handlePending)
      .addCase(getRecipes.fulfilled, (state, action) => { })
      .addCase(getRecipes.rejected, handleRejected)

      // ------------ Get Recipes Main Page ----------------
      .addCase(getRecipesMainPage.pending, handlePending)
      .addCase(getRecipesMainPage.fulfilled, (state, action) => { })
      .addCase(getRecipesMainPage.rejected, handleRejected)

      // ------------ Get Recipes Favorite ----------------
      .addCase(getRecipesFavorite.pending, handlePending)
      .addCase(getRecipesFavorite.fulfilled, (state, action) => { })
      .addCase(getRecipesFavorite.rejected, handleRejected)

      // ------------ Toggle Favorite Recipes By Id ----------------
      .addCase(toggleFavoriteRecipesById.pending, handlePending)
      .addCase(toggleFavoriteRecipesById.fulfilled, (state, action) => { })
      .addCase(toggleFavoriteRecipesById.rejected, handleRejected)

      // ------------ Toggle Like Recipes Status By Id ----------------
      .addCase(toggleLikeRecipesStatusById.pending, handlePending)
      .addCase(toggleLikeRecipesStatusById.fulfilled, (state, action) => { })
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
