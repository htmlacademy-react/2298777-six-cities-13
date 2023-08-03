import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DetailedOffer } from '../../types/app-type';
import { logoutAction } from '../api-actions/user';
import { toast } from 'react-toastify';
import { postFavoriteAction } from '../api-actions/favorite';
import { fetchCurrentOfferAction } from '../api-actions/offer';

const initialState = {
  currentOffer: null,
  isCurrentOfferLoading: false,
  error: null,
} as {
  currentOffer: null | DetailedOffer;
  isCurrentOfferLoading: boolean;
  error: null | string;
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    removeCurrentOffer: (state) => {
      state.currentOffer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isCurrentOfferLoading = false;
        state.error = null;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.currentOffer = null;
        state.isCurrentOfferLoading = false;
        toast.warn('Error while fetching current offer');
        state.error = 'Error while fetching current offer';
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        if (state.currentOffer?.id === action.payload.id) {
          state.currentOffer = action.payload;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        if (state.currentOffer) {
          state.currentOffer.isFavorite = false;
        }
      });
  },
});
