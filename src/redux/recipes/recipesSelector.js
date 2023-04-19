export const getRecipes = (state) => state.recipes;
export const getTotalRecipes = (state) => state.recipes.total;
export const getLimitRecipes = (state) => state.recipes.limit;
export const getRecipesFavorite = (state) =>
state.recipes.userFavouritesRecipes;
export const selectRecipe = (state) => state.recipes.recipe;
export const selectIsLoading = (state) => state.recipes.isLoading;

///////
export const selectRecipeLoading = (state) => state.recipes.recipeIsLoading;  //get one by id/loading

export const selectUserFavoritesIsLoading = (state) => //get list of favorites/loading
  state.recipes.userFavoritesIsLoading;

export const selectUserRecipes = (state) => state.recipes.userRecipes;
export const selectUserRecipesIsLoading = (state) =>
  state.recipes.userRecipesIsLoading;

