import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  isAuth: false,
  user: {},
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
    logOut: () => {
      localStorage.clear();
      return initialState;
    },
    isAuth: (state) => {
      state.isAuth = true;
    },
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut, isAuth, saveUser } = LoginSlice.actions;

export default LoginSlice.reducer;
