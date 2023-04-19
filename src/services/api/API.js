import axios from 'axios';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//==========Auth===============
export const UserAPI = {
  register: async credentials => {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  },

  login: async credentials => {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.accessToken);
    return data;
  },

  logout: async () => {
    await axios.post('/users/logout');
    clearAuthHeader();
  },
  

  refreshToken: async refreshToken => {
    const { data } = await axios.post('/users/refresh', refreshToken);
    setAuthHeader(data.accessToken);
    return data;
  },

  refreshUser: async persistedToken => {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  },

  //=============User==============================
  update: async credentials => {
    const { data } = await axios.put('users/update', credentials);
    return data;
  },

  getShoppingList: async () => {
    const { data } = await axios.get('users/shopping-list');
    return data;
  },

  addToShoppingList: async recipe => {
    const { data } = await axios.post('users/shopping-list', recipe);
    return data;
  },

  updateShoppingList: async info => {
    const { data } = await axios.patch('users/shopping-list', info);
    return data;
  },

  updateUserInfoForSubscribe: async info => {
    const { data } = await axios.patch('users/subscribe', info);
    return data;
  },
};

//=========Recipes==============
export const RecipesAPI = {
  getPopularRecipes: async () => {
    const { data } = await axios.get(`/recipes?limit=4`);
    return data;
  },
  getRecipesMainPage: async () => {
    const { data } = await axios.get('/recipes/main-page');
    return data;
  },
  getRecipesFavorite: async ({ page, sort = 'popular' }) => {
    const { data } = await axios.get(`/recipes/favorite?page=${page}&limit=4&sort=${sort}`);
    return data;
  },

  toggleFavoriteRecipesById: async id => {
    const { data } = await axios.patch(`/recipes/favorite/${id}`);
    return data;
  },

  toggleLikeRecipesStatusById: async id => {
    const { data } = await axios.patch(`/recipes/like/${id}`);
    return data;
  },

  getRecipeById: async id => {
    const { data } = await axios.get(`/recipes/id/${id}`);
    return data;
  },

  getAllCategories: async () => {
    const { data } = await axios.get(`/recipes/category/list`);
    return data;
  },

  getRecipeByCategories: async ({ normalisedQuery, page, limit = 8, sort = 'popular', }) => {
    const { data } = await axios.get( `/recipes/category/${normalisedQuery}?page=${page}&limit=${limit}&sort=${sort}`);
    return data;
  },

  getRecipesByTitleQuery: async ({ query = '', page = 1 }) => {
    const { data } = await axios.get(`/recipes/title/${query}?page=${page}`);
    return data;
  },

  getRecipesByIngredientsQuery: async ({ query = '', page = 1 }) => {
    const { data } = await axios.get(`/recipes/ingredient/${query}?page=${page}`);
    return data;
  },
};

//=========Own recipes ==================
export const OwnRecipesAPI = {
  getAllOwnRecipes: async ({ page, limit }) => {
    const { data } = await axios.get(
      `/own-recipes?page=${page}&limit=${limit}`
    );
    return data;
  },
  addOwnRecipe: async recipeData => {
    const { data } = await axios.post('/own-recipes', recipeData);
    return data;
  },
  deleteOwnRecipe: async recipeId => {
    const { data } = await axios.delete(`/own-recipes${recipeId}`);
    return data;
  },
  getOwnRecipeById: async recipeId => {
    const { data } = await axios.get(`/own-recipes/${recipeId}`);
    return data;
  },
};
