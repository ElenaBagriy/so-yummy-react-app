import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user/userSlice';
import { recipesReducer } from './recipes/recipesSlice';
import { ownRecipesReducer } from './ownRecipes/ownRecipesSlice';

const userConfig = {
  key: 'token',
  storage,
  whitelist: ['refreshToken', 'accessToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(userConfig, userReducer),
    recipes: recipesReducer,
    ownRecipes: ownRecipesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
