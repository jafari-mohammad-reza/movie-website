import { createSlice } from "@reduxjs/toolkit";

const NotificationsSlicer = createSlice({
  name: "notifications",
  initialState: {
    list: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteNotification: (state, action) => {
      state.list = state.list.filter(
        (notification) => notification.id !== action.payload.id
      );
    },
    readNotification: (state, action) => {
      const targetNotification = state.list.find( 
        (notification) => notification.id === action.payload.id
      );
      targetNotification.isRead = true;
    },
    markAllNotifications: (state, action) => {
      state.list.forEach((notification) => {
        notification.isRead = true;
      });
    },
  },
});

export const { addNotification, deleteNotification, readNotification ,markAllNotifications} =
  NotificationsSlicer.actions;
export const selectNotification = (state) => state.notifications.list;
export default NotificationsSlicer.reducer;
