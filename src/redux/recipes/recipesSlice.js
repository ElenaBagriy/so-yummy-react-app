import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getIngredientsByQuery, getRecipeByCategories, getRecipeById, getRecipes, getRecipesByQuery, getRecipesFavorite, getRecipesMainPage, toggleFavoriteRecipesById, toggleLikeRecipesStatusById } from "./recipesOperations";

const recipesInitialState = {
    recipes: [
        {
            "_id": "",
            "title": "",
            "category": "",
            "description": "",
            "preview": "",
            "time": "",
            "popularity": null,
            "like": true,
            "favorite": true
        }
    ],
    randomRecipes: [],
    total: null,
    page: null,
    limit: null,
    sort: "title",
    isLoading: false,
    error: null,
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: recipesInitialState,
    extraReducers: (builder) =>
        builder
            
            // ------------ Get all recipes ----------------
            .addCase(getRecipes.pending, (state) => {

            })
            .addCase(getRecipes.fulfilled, (state, action) => {

            })
            .addCase(getRecipes.rejected, (state, action) => {

            })
    
            // ------------ Get Recipes Main Page ----------------
            .addCase(getRecipesMainPage.pending, (state) => {

            })
            .addCase(getRecipesMainPage.fulfilled, (state, action) => {

            })
            .addCase(getRecipesMainPage.rejected, (state, action) => {

            })

            // ------------ Get Recipes Favorite ----------------
            .addCase(getRecipesFavorite.pending, (state) => {

            })
            .addCase(getRecipesFavorite.fulfilled, (state, action) => {

            })
            .addCase(getRecipesFavorite.rejected, (state, action) => {

            })

            // ------------ Toggle Favorite Recipes By Id ----------------
            .addCase(toggleFavoriteRecipesById.pending, (state) => {

            })
            .addCase(toggleFavoriteRecipesById.fulfilled, (state, action) => {

            })
            .addCase(toggleFavoriteRecipesById.rejected, (state, action) => {

            })

            // ------------ Toggle Like Recipes Status By Id ----------------
            .addCase(toggleLikeRecipesStatusById.pending, (state) => {

            })
            .addCase(toggleLikeRecipesStatusById.fulfilled, (state, action) => {

            })
            .addCase(toggleLikeRecipesStatusById.rejected, (state, action) => {

            })
    
                // ------------ Get Recipe By Id ----------------
            .addCase(getRecipeById.pending, (state) => {

            })
            .addCase(getRecipeById.fulfilled, (state, action) => {

            })
            .addCase(getRecipeById.rejected, (state, action) => {

            })

            // ------------ Get All Categories ----------------
            .addCase(getAllCategories.pending, (state) => {

            })
            .addCase(getAllCategories.fulfilled, (state, action) => {

            })
            .addCase(getAllCategories.rejected, (state, action) => {

            })
            
            // ------------ Get Recipe By Categories ----------------
            .addCase(getRecipeByCategories.pending, (state) => {

            })
            .addCase(getRecipeByCategories.fulfilled, (state, action) => {

            })
            .addCase(getRecipeByCategories.rejected, (state, action) => {

            })

            // ------------ Get Recipes ByQuery ----------------
            .addCase(getRecipesByQuery.pending, (state) => {

            })
            .addCase(getRecipesByQuery.fulfilled, (state, action) => {

            })
            .addCase(getRecipesByQuery.rejected, (state, action) => {

            })
            // ------------ Get Ingredients By Query ----------------
            .addCase(getIngredientsByQuery.pending, (state) => {

            })
            .addCase(getIngredientsByQuery.fulfilled, (state, action) => {

            })
            .addCase(getIngredientsByQuery.rejected, (state, action) => {

            })
});



export const recipesReducer = recipesSlice.reducer;