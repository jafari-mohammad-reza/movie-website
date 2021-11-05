import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../features/watchListSlicer";
import NotificationsReducer from "../features/notificationsSlicer";
const Store = configureStore({
  reducer: {
    watchList: watchListReducer,
    notifications: NotificationsReducer,
  },
});

export default Store;
