import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../features/watchListSlicer";
const Store = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
});

export default Store;
