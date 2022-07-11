import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  module: {},
};
export const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
    saveModule: (state, action) => {
      state.module = action.payload;
      // console.log(state.module);
    },
  },
});
// Action creators are generated for each case reducer function
export const { saveModule, clearState } = HomePageSlice.actions;

export default HomePageSlice.reducer;
