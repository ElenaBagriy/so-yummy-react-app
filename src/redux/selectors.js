
//user
export const selectUser = state => state.auth.user;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

//recipes
export const selectPopularRecipes = (state) => state.recipes.popularRecipes;

export const selectCategoryList = state => state.recipes.categoryList;

export const selectMainPageRecipes = state => state.recipes.mainPageRecipes;

export const selectFavoriteRecipes = state => state.recipes.favoriteRecipes.recipes;
export const selectFavoriteRecipesTotalPages = state => {
    return Math.round(state.recipes.favoriteRecipes.total / state.recipes.favoriteRecipes.limit);
};

export const selectRecipes = (state) => state.recipes;

export const selectTotalRecipes = (state) => state.recipes.total;

export const selectLimitRecipes = (state) => state.recipes.limit;

export const selectLoadingRecipes = (state) => state.recipes.isLoading;

//ingredients
export const selectIngredients = state => state.recipes.ingredientsList;

//search
export const selectSearchQuery = state => state.search.query;

//shoppingList
export const selectShoppingList = state => state.shoppingList.products;