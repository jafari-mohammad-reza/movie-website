import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
export const watchListSlicer = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      // if(console.log(state.list.index(action.payload.name)))
      state.list = [...state.list, action.payload];
    },
    removeFromList: (state, action) => {
      state.list = state.list.filter((movie) => movie.name !== action.payload.name   );
    },
  },
});

export const { addToList, removeFromList } = watchListSlicer.actions;
export const selectList = (state) => state.watchList.list;
export default watchListSlicer.reducer;
