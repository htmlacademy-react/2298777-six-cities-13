import {internet, datatype, date, lorem, name, image} from 'faker';
import {Comments, DetailedOffer, Offers, User} from '../types/app-type';
import { Cities } from '../const';

const generateComment = () : Comments => new Array(15).fill(null).map(() => (
  {
    id: datatype.uuid(),
    date: date.recent(),
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

export {generateComment, generateOfferCards, generateDetailOffer, generateUser};
