import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { logoutAction } from '../../api-actions/user';
import { Offer, Offers } from '../../../types/app-type';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import { parseStatusCode } from '../../../util/util';
import { fetchFavoritesAction, postFavoriteAction } from '../../api-actions/favorite';

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
        const offer : Offer = {
          type: action.payload.type,
          id: action.payload.id,
          city: action.payload.city,
          previewImage: action.payload.images[0],
          title: action.payload.title,
          price: action.payload.price,
          rating: action.payload.rating,
          isFavorite: action.payload.isFavorite,
          isPremium: action.payload.isPremium,
          location: action.payload.location,
        };
        if (offer.isFavorite) {
          state.favorites.push(offer);
        } else {
          state.favorites = state.favorites.filter((o) => o.id !== offer.id);
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
