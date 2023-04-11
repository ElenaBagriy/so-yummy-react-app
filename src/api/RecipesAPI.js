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
    setAuthHeader(data.token);
    return data;
  },
  login: async credentials => {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  },
  logout: async () => {
    await axios.post('/users/logout');
    clearAuthHeader();
  },
  refresh: async persistedToken => {
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
  getRecipes: async () => {
    const { data } = await axios.get('/recipes');
    return data;
  },
  getRecipesMainPage: async () => {
    const { data } = await axios.get('/recipes/main-page');
    return data;
  },
  getRecipesFavorite: async () => {
    const { data } = await axios.get('/recipes/favorite');
    return data;
  },
  addRecipes: async formData => {
    const { data } = await axios.post(`/recipes`, formData);
    return data;
  },
  updateRecipes: async ({ id, newData }) => {
    const { data } = await axios.patch(`/recipes/${id}`, newData);
    return data;
  },
  deleteRecipes: async id => {
    const { data } = await axios.delete(`/recipes/${id}`);
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
  getRecipeByCategories: async category => {
    const { data } = await axios.get(`/recipes/category/${category}`);
    return data;
  },
  getRecipesByQuery: async query => {
    const { data } = await axios.get(`/recipes/title/${query}`);
    return data;
  },
  getIngredientsByQuery: async query => {
    const { data } = await axios.get(`/recipes/ingredient/${query}`);
    return data;
  },
};

//=========Own recipes ==================
export const OwnRecipesAPI = {
  getAllOwnRecipes: async () => {
    const { data } = await axios.get('/own-recipes');
    return data;
  },
  addOwnRecipes: async recipe => {
    const { data } = await axios.post('/own-recipes', recipe);
    return data;
  },
  deleteOwnRecipes: async recipeId => {
    const { data } = await axios.delete(`/own-recipes${recipeId}`);
    return data;
  },
  getOwnRecipesById: async recipeId => {
    const { data } = await axios.get(`/own-recipes/${recipeId}`);
    return data;
  },
};
