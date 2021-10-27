import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlicer";
const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default Store;
