import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './slices/app-process';
import { userData } from './slices/user-data';
import { commentsData } from './slices/comments-data';
import { offersData } from './slices/offers-data';
import { favoriteData } from './slices/favorite-data';
import { nearByData } from './slices/near-by-data';
import { offerData } from './slices/offer-data';


export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.NearBy]: nearByData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.Favorites]: favoriteData.reducer,
});

