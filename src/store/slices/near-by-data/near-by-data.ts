import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { Location, Offers } from '../../../types/app-type';
import { toast } from 'react-toastify';
import { fetchNearByPlacesAction } from '../../api-actions/offer';
import { postFavoriteAction } from '../../api-actions/favorite';

const initialState = {
  nearByOffers: [],
  isNearByLoading: false,
  nearByPoints: [],
} as {
  nearByOffers: Offers;
  isNearByLoading: boolean;
  nearByPoints: Location[];
};

export const nearByData = createSlice({
  name: NameSpace.NearBy,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearByPlacesAction.pending, (state) => {
        state.isNearByLoading = true;
      })
      .addCase(fetchNearByPlacesAction.fulfilled, (state, action) => {
        state.nearByOffers = [];
        while (state.nearByOffers.length < 3) {
          const randomIndex = Math.floor(Math.random() * action.payload.length);
          if (!state.nearByOffers.includes(action.payload[randomIndex])) {
            state.nearByOffers.push(action.payload[randomIndex]);
          }
        }
        state.nearByPoints = state.nearByOffers.map((offer) => offer.location);
        state.isNearByLoading = false;
      })
      .addCase(fetchNearByPlacesAction.rejected, (state) => {
        state.nearByOffers = [];
        state.isNearByLoading = false;
        toast.warn('Error while fetching near by places');
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        const offer = state.nearByOffers.find((o) => o.id === action.payload.id);

        if (offer) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
  },
});
