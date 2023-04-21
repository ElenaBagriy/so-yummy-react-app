import { createSlice } from "@reduxjs/toolkit";
import { addOwnRecipe, deleteOwnRecipe, getAllOwnRecipes, getOwnRecipeById } from "./ownRecipesOperations";

const ownRecipesInitialState = {
    recipes: [
        {
            _id: "640cd5ac2d9fecf12e8897fc",
            title: "Spaghetti Bolognese",
            category: "Beef",
            description: "Recipe's description",
            preview: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
            time: "40"
        },
    ],
    total: null,
    page: null,
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
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getAllOwnRecipes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                // state.recipes = action.payload.recipes;
                state.total = action.payload.total;
            })
            .addCase(getAllOwnRecipes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
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
                state.isLoading = true;
                state.error = false;
            })
            .addCase(deleteOwnRecipe.fulfilled, (state, action) => {
                console.log('action.payload', action.payload.message);
                const message = action.payload.message;
                const responceId = message.split(' ')[1];
                console.log('responceId', responceId);
        
                state.recipes = state.recipes.filter(
                  recipes => recipes._id !== responceId
                );
                state.isLoading = false;
                state.error = false;
            })
            .addCase(deleteOwnRecipe.rejected, (state, action) => {
                state.error = true;
                state.isLoading = false;
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