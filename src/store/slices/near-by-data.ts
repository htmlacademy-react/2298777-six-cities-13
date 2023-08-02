import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offers } from '../../types/app-type';
import { fetchNearByPlacesAction } from '../api-action';
import { toast } from 'react-toastify';

const initialState = {
  nearByOffers: [],
  isNearByLoading: false,
} as {
  nearByOffers: Offers;
  isNearByLoading: boolean;
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
        state.nearByOffers = action.payload;
        state.isNearByLoading = false;
      })
      .addCase(fetchNearByPlacesAction.rejected, (state) => {
        state.nearByOffers = [];
        state.isNearByLoading = false;
        toast.warn('Error while fetching near by places');
      });
  },
});
