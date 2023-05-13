import { createSlice } from "@reduxjs/toolkit";
import { addOwnRecipe, deleteOwnRecipe, getAllOwnRecipes } from "./ownRecipesOperations";

const ownRecipesInitialState = {
    recipes: [],
    total: null,
    page: null,
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

const ownRecipesSlice = createSlice({
    name: 'ownRecipes',
    initialState: ownRecipesInitialState,
    extraReducers: (builder) =>
        builder
            // ------------ Get all own recipes ----------------
            .addCase(getAllOwnRecipes.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getAllOwnRecipes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                state.recipes = action.payload.recipes;
                state.total = action.payload.total;
                state.page = action.payload.page;
            })
            .addCase(getAllOwnRecipes.rejected, handleRejected)
    

            // ------------ Add Own Recipe ----------------
            .addCase(addOwnRecipe.pending, handlePending)
            .addCase(addOwnRecipe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                state.recipes = action.payload;
            })
            .addCase(addOwnRecipe.rejected, handleRejected)


            // ------------ Delete Own Recipe ----------------
            .addCase(deleteOwnRecipe.pending, handlePending)
            .addCase(deleteOwnRecipe.fulfilled, (state, action) => {
                const message = action.payload.message;
                const responceId = message.split(' ')[1];
        
                state.recipes = state.recipes.filter(
                  recipes => recipes._id !== responceId
                );
                state.isLoading = false;
                state.error = false;
            })
            .addCase(deleteOwnRecipe.rejected, handleRejected)
});



export const ownRecipesReducer = ownRecipesSlice.reducer;