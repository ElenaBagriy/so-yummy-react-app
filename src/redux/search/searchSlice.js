const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateSearchQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;