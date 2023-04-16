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

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: recipesInitialState,
  extraReducers: builder =>
    builder

      // ------------ Get all recipes ----------------
      .addCase(getRecipes.pending, state => {})
      .addCase(getRecipes.fulfilled, (state, action) => {})
      .addCase(getRecipes.rejected, (state, action) => {})

      // ------------ Get Recipes Main Page ----------------
      .addCase(getRecipesMainPage.pending, state => {})
      .addCase(getRecipesMainPage.fulfilled, (state, action) => {})
      .addCase(getRecipesMainPage.rejected, (state, action) => {})

      // ------------ Get Recipes Favorite ----------------
      .addCase(getRecipesFavorite.pending, state => {})
      .addCase(getRecipesFavorite.fulfilled, (state, action) => {})
      .addCase(getRecipesFavorite.rejected, (state, action) => {})

      // ------------ Toggle Favorite Recipes By Id ----------------
      .addCase(toggleFavoriteRecipesById.pending, state => {})
      .addCase(toggleFavoriteRecipesById.fulfilled, (state, action) => {})
      .addCase(toggleFavoriteRecipesById.rejected, (state, action) => {})

      // ------------ Toggle Like Recipes Status By Id ----------------
      .addCase(toggleLikeRecipesStatusById.pending, state => {})
      .addCase(toggleLikeRecipesStatusById.fulfilled, (state, action) => {})
      .addCase(toggleLikeRecipesStatusById.rejected, (state, action) => {})

      // ------------ Get Recipe By Id ----------------
      .addCase(getRecipeById.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.recipeId = action.payload._id;
      })
      .addCase(getRecipeById.rejected, (state, action) => {})

      // ------------ Get All Categories ----------------
      .addCase(getAllCategories.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload;
      })
      .addCase(getAllCategories.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })

      // ------------ Get Recipe By Categories ----------------
      .addCase(getRecipeByCategories.pending, state => {})
      .addCase(getRecipeByCategories.fulfilled, (state, action) => {})
      .addCase(getRecipeByCategories.rejected, (state, action) => {})

      // ------------ Get Recipes ByQuery ----------------
      .addCase(getRecipesByQuery.pending, state => {})
      .addCase(getRecipesByQuery.fulfilled, (state, action) => {})
      .addCase(getRecipesByQuery.rejected, (state, action) => {})
      // ------------ Get Ingredients By Query ----------------
      .addCase(getIngredientsByQuery.pending, state => {})
      .addCase(getIngredientsByQuery.fulfilled, (state, action) => {})
      .addCase(getIngredientsByQuery.rejected, (state, action) => {})
      // ------------ Get All Ingredients ----------------
      .addCase(getIngredients.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredientsList = action.payload.ingredients;
        // console.log(action.payload.ingredients);
      })
      .addCase(getIngredients.rejected, state => {
        state.isLoading = false;
        state.error = true;
      }),
});

export const recipesReducer = recipesSlice.reducer;
