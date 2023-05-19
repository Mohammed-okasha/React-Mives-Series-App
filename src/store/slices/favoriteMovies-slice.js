import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavoritesMedia = createAsyncThunk(
  "favoriteSlice/fetchFavoritesMedia",

  async () => {
    const res = await fetch(
      "https://netflix-clone-61d73-default-rtdb.firebaseio.com/favorites.json"
    );

    const data = await res.json();

    if (!data) {
      return;
    }

    const favoriteMovies = [];

    Object.entries(data).forEach(([key, value]) => {
      const favoriteMovie = { ...value, firebaseId: key };
      favoriteMovies.push(favoriteMovie);
    });

    return favoriteMovies;
  }
);

const initialFavoriteMedia = {
  items: [],
};

const favoriteMediaSlice = createSlice({
  initialState: initialFavoriteMedia,
  name: "favoriteSlice",

  reducers: {
    TOGGLE_FAVORITE: (state, action) => {
      const existingMovie = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingMovie) {
        state.items.push(action.payload);
      } else {
        const updatedMovies = state.items.filter(
          (item) => item.id !== action.payload.id
        );

        state.items = updatedMovies;
      }
    },

    REMOVE_FAV_ITEM: (state, action) => {
      const { payload: id } = action;

      const updatedMedia = state.items.filter((item) => item.id !== id);
      state.items = updatedMedia;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFavoritesMedia.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }

      state.items = payload;
    });

    builder.addCase(fetchFavoritesMedia.rejected, () => {
      // console.log("Promise rejected");
    });
  },
});

export default favoriteMediaSlice.reducer;
export const { FETCH_FAV_MOVIES, TOGGLE_FAVORITE, REMOVE_FAV_ITEM } =
  favoriteMediaSlice.actions;
//========================================================
export const selectFavoriteMedia = (state) => state.favoriteMedia;
