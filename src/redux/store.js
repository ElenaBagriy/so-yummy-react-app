import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userSlice";
import { recipesReducer } from "./recipes/recipesSlice";
import { ownRecipesReducer } from "./ownRecipes/ownRecipesSlice";
import { shoppingListReducer } from "./shoplist/shoplistSlice";
import { searchReducer } from "./search/searchSlice";


const userConfig = {
  key: "token",
  storage,
  whitelist: ["refreshToken", "accessToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(userConfig, userReducer),
    recipes: recipesReducer,
    ownRecipes: ownRecipesReducer,
    shoppingList: shoppingListReducer,
    search: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


//   інформацію про юзера,
//   список популярных рецептов
//   список категорій,


//   список всіх інгрідієнтів,
//   список улюблених рецептів і 
//   список інгрідієнтів з шопінг - лист