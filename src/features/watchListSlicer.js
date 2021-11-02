import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
export const watchListSlicer = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    removeFromList: (state, action) => {
      state.list.pop(action.payload);
    },
  },
});

export const { addToList, removeFromList } = watchListSlicer.actions;
export const selectList = (state) => state.watchList.list;
export default watchListSlicer.reducer;
