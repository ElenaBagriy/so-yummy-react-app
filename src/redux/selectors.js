
//user
export const selectUser = state => state.auth.user;

export const selectAccessToken = state => state.auth.accessToken;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

//recipes
export const selectCategoryList = state => state.recipes.categoryList;


//ingredients
export const selectIngredients = state => state.recipes.ingredientsList;

//search
export const selectSearchQuery = state => state.search.query;
