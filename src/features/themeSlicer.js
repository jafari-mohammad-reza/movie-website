import { createSlice } from "@reduxjs/toolkit";

export const themeSlicer = createSlice({
  name: "theme",
  initialState: {
    theme : "light"
  },
  reducers: {
    changeTheme: (state , action) => {
      state.theme = action.payload 
    },
 
  },
});

export const {changeTheme } = themeSlicer.actions;
export const selectTheme = (state) => state.theme.theme;
export default themeSlicer.reducer;
