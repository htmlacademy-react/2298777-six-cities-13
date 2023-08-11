import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { logoutAction } from '../api-actions/user';
import { Offers } from '../../types/app-type';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import { parseStatusCode } from '../../util/util';
import { fetchFavoritesAction, postFavoriteAction } from '../api-actions/favorite';

const initialState = {
  favorites: [],
  isFavoritesLoading: false,
  error: null,
} as {
  favorites: Offers;
  isFavoritesLoading: boolean;
  error: null | string;
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
        state.error = null;
      })
      .addCase(fetchFavoritesAction.rejected, (state, action) => {
        state.favorites = [];
        state.isFavoritesLoading = false;
        if (action.error.message && parseStatusCode(action.error.message) !== StatusCodes.UNAUTHORIZED) {
          toast.warn('Error while fetching favorites');
          state.error = 'Error while fetching favorites';
        }
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        }
      })
      .addCase(postFavoriteAction.rejected, () => {
        toast.warn('Error while posting favorite');
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
      });
  },
});
