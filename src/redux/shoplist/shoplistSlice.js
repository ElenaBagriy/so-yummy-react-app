import { createSlice } from '@reduxjs/toolkit';
import { addProductToShoppingList, fetchShoppingList, removeProductFromShoppingList } from './shoplistOperation';


const initialState = {
  products: [    {
    "productId": "640cd5ac2d9fecf12e8897fc",
    "title": "Meat",
    "thumb": "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    "measure": [
      "400g"
    ]
  },
  ],
  isLoading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, pendingReducer)
      .addCase(fetchShoppingList.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchShoppingList.rejected, errorReducer)

      // --------------------------------------------------------------------

      .addCase(addProductToShoppingList.pending, pendingReducer)
      .addCase(addProductToShoppingList.fulfilled, (state, { payload }) => {
        state.products = [...state.products, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProductToShoppingList.rejected, errorReducer)

      // --------------------------------------------------------------------

      .addCase(removeProductFromShoppingList.pending, pendingReducer)
      .addCase(
        removeProductFromShoppingList.fulfilled,
        (state, { payload }) => {
          state.products = [...state.products, payload];

          state.products = state.products.filter(
            //  check when few products have the same id

            product => product.productId !== payload.productId
          );

          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(removeProductFromShoppingList.rejected, errorReducer);
  },
});

function pendingReducer(state) {
  state.isLoading = true;
  state.error = null;
}
function errorReducer(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const shoppingListReducer = shoppingListSlice.reducer;