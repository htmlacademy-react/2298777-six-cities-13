import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userData } from './slices/user-data/user-data';
import { commentsData } from './slices/comments-data/comments-data';
import { offersData } from './slices/offers-data/offers-data';
import { favoriteData } from './slices/favorite-data/favorite-data';
import { nearByData } from './slices/near-by-data/near-by-data';
import { offerData } from './slices/offer-data/offer-data';


export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.NearBy]: nearByData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.Favorites]: favoriteData.reducer,
});

