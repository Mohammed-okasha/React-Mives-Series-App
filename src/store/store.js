import { configureStore } from "@reduxjs/toolkit";
import favoriteMediaReducer from "./slices/favoriteMovies-slice";
import authReducer from "./slices/auth-slice";

export const store = configureStore({
  reducer: {
    favoriteMedia: favoriteMediaReducer,
    auth: authReducer,
  },
});
