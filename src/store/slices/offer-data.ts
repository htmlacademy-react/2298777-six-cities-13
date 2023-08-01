import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DetailedOffer } from '../../types/app-type';
import { fetchCurrentOfferAction, logoutAction, postFavoriteAction } from '../api-action';

const initialState = {
  currentOffer: null,
  isCurrentOfferLoading: false,
} as {
  currentOffer: null | DetailedOffer;
  isCurrentOfferLoading: boolean;
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
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.currentOffer = null;
        state.isCurrentOfferLoading = false;
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
