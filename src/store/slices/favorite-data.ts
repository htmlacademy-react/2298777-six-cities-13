import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchFavoritesAction, logoutAction, postFavoriteAction } from '../api-action';
import { Offers } from '../../types/app-type';

const initialState = {
  favorites: [],
  isFavoritesLoading: false,
} as {
  favorites: Offers;
  isFavoritesLoading: boolean;
};

export const favoriteData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favorites = [];
        state.isFavoritesLoading = false;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        }
      })
      .addCase(postFavoriteAction.rejected, () => {
        true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
      });
  },
});
