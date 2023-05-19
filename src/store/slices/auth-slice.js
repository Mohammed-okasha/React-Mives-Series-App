import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  userName: null,
  userEmail: null,
  isSignInMode: true,
  isLoggedIn: false,
};

const authSlice = createSlice({
  initialState: initialAuthState,
  name: "auth",

  reducers: {
    TOGGLE_MODE: (state) => {
      const updateMode = !state.isSignInMode;
      state.isSignInMode = updateMode;
    },

    USER_LOGIN: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.isLoggedIn = true;
    },

    USER_LOGOUT: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const autActions = authSlice.actions;
export const selectAuthState = (state) => state.auth;
