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
import { myRecipesReducer } from "./myRecipes/myRecipesSlice";


const userConfig = {
  key: "token",
  storage,
  whitelist: ["refreshToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(userConfig, userReducer),
    recipes: recipesReducer,
    ownRecipes: ownRecipesReducer,
    shoppingList: shoppingListReducer,
    myRecipes: myRecipesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
