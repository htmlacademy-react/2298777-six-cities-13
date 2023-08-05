import { Cities } from '../const';

type Offer = {
  id : string;
  title : string;
  type : string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type DetailedOffer = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
} & Offer;

type Comment = {
  id: string;
  date: Date;
  user: UserInComment;
  comment: string;
  rating: number;
}

type UserInComment = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type User = {
  email: string;
  token: string;
} & UserInComment

type City = {
  name: CityString;
  location: Location;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type AuthData = {
  email: string;
  password: string;
}

type CityString = ValueOf<typeof Cities>;

type Offers = Offer[];

type Comments = Comment[];

type ValueOf<T> = T[keyof T];

export type {Offer, Offers, DetailedOffer, Comments, Comment, Host,
  City, Location, CityString, ValueOf, AuthData, User};
