import { createSlice } from "@reduxjs/toolkit";
import { addOwnRecipe, deleteOwnRecipe, getAllOwnRecipes, getOwnRecipeById } from "./ownRecipesOperations";

const ownRecipesInitialState = {
    recipes: [
        {
            "_id": "",
            "title": "",
            "category": "",
            "description": "",
            "preview": "",
            "time": "",
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

const ownRecipesSlice = createSlice({
    name: 'ownRecipes',
    initialState: ownRecipesInitialState,
    extraReducers: (builder) =>
        builder
            
            // ------------ Get all own recipes ----------------
            .addCase(getAllOwnRecipes.pending, (state) => {

            })
            .addCase(getAllOwnRecipes.fulfilled, (state, action) => {

            })
            .addCase(getAllOwnRecipes.rejected, (state, action) => {

            })
    
            // ------------ Add Own Recipe ----------------
            .addCase(addOwnRecipe.pending, (state) => {

            })
            .addCase(addOwnRecipe.fulfilled, (state, action) => {

            })
            .addCase(addOwnRecipe.rejected, (state, action) => {

            })

            // ------------ Delete Own Recipe ----------------
            .addCase(deleteOwnRecipe.pending, (state) => {

            })
            .addCase(deleteOwnRecipe.fulfilled, (state, action) => {

            })
            .addCase(deleteOwnRecipe.rejected, (state, action) => {

            })

            // ------------ Get Own Recipe By Id ----------------
            .addCase(getOwnRecipeById.pending, (state) => {

            })
            .addCase(getOwnRecipeById.fulfilled, (state, action) => {

            })
            .addCase(getOwnRecipeById.rejected, (state, action) => {

            })

});



export const ownRecipesReducer = ownRecipesSlice.reducer;