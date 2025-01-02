import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Idyllic',
  age: 19,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changeName(state, action) {
      // payload = new name
      state.name = action.payload;
    },
    updateAge(state, action) {
      // payload = new age
      state.age = action.payload;
    },
  },
});

export const { changeName, updateAge } = pageSlice.actions;

export default pageSlice.reducer;
