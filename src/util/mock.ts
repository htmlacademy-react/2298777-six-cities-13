import {internet, datatype, date, lorem, name, image} from 'faker';
import {Comments, DetailedOffer, Offer, Offers, User} from '../types/app-type';
import { Cities } from '../const';
import { Action } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import createAPI from '../services/api';
import { State } from '../types/store';

const generateComments = () : Comments => new Array(15).fill(null).map(() => (
  {
    id: datatype.uuid(),
    date: date.recent().toISOString(),
    user: {
      name: name.firstName(),
      avatarUrl: internet.avatar(),
      isPro: datatype.boolean(),
    },
    comment: lorem.sentences(),
    rating: datatype.number({min: 1, max: 5}),
  }
));

const generateOfferCards = () : Offers => new Array(15).fill(null).map(() => (
  {
    id: datatype.uuid(),
    title: lorem.words(),
    type: datatype.string(),
    price: datatype.number({min: 1, max: 1000}),
    city: {
      name: Object.values(Cities)[datatype.number({min: 0, max: 5})],
      location: {
        latitude: datatype.number({min: 1, max: 200}),
        longitude: datatype.number({min: 1, max: 200}),
        zoom: datatype.number({min: 1, max: 10}),
      },
    },
    location: {
      latitude: datatype.number({min: 1, max: 200}),
      longitude: datatype.number({min: 1, max: 200}),
      zoom: datatype.number({min: 1, max: 10}),
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({min: 1, max: 5}),
    previewImage: internet.avatar(),
  }
));

const generateDetailOffer = () : DetailedOffer => (
  {
    id: datatype.uuid(),
    title: lorem.words(),
    type: datatype.string(),
    price: datatype.number({min: 1, max: 1000}),
    city: {
      name: Object.values(Cities)[datatype.number({min: 0, max: 5})],
      location: {
        latitude: datatype.number({min: 1, max: 200}),
        longitude: datatype.number({min: 1, max: 200}),
        zoom: datatype.number({min: 1, max: 10}),
      },
    },
    location: {
      latitude: datatype.number({min: 1, max: 200}),
      longitude: datatype.number({min: 1, max: 200}),
      zoom: datatype.number({min: 1, max: 10}),
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({min: 1, max: 5}),
    description: lorem.sentences(),
    bedrooms: datatype.number({min: 1, max: 5}),
    goods: new Array(5).fill(null).map(() => (lorem.words())),
    host: {
      name: name.firstName(),
      avatarUrl: internet.avatar(),
      isPro: datatype.boolean(),
    },
    images: new Array(5).fill(null).map(() => (image.city())),
    maxAdults: datatype.number({min: 1, max: 5}),
  }
);

const generateUser = () : User => (
  {
    name: name.firstName(),
    avatarUrl: internet.avatar(),
    isPro: datatype.boolean(),
    email: internet.email(),
    token: datatype.uuid(),
  }
);

const changeRandomFavoriteStatus = (offers: Offers) : Offers => {
  const randomLength = datatype.number({min: 0, max: offers.length});
  const randomChangedIndexes = new Array(randomLength).fill(null).map(() => (datatype.number({min: 0, max: 14})));
  const changedOffers = offers.map((offer, index) => {
    if (randomChangedIndexes.includes(index)) {
      return {...offer, isFavorite: !offer.isFavorite};
    }
    return offer;
  });
  return changedOffers;
};

const createDetailedOfferFromOffer = (offer: Offer) : DetailedOffer => ({
  ...offer,
  description: lorem.sentences(),
  bedrooms: datatype.number({min: 1, max: 5}),
  goods: new Array(5).fill(null).map(() => (lorem.words())),
  host: {
    name: name.firstName(),
    avatarUrl: internet.avatar(),
    isPro: datatype.boolean(),
  },
  images: new Array(5).fill(null).map(() => (image.city())),
  maxAdults: datatype.number({min: 1, max: 5}),
});

const extractActionTypes = (actions: Action<string>[]) => actions.map((action) => action.type);

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>

export {generateComments, generateOfferCards, generateDetailOffer, generateUser,
  changeRandomFavoriteStatus, createDetailedOfferFromOffer, extractActionTypes};
