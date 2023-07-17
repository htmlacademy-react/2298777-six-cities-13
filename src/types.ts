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

type User = {
  email: string;
  token: string;
} & UserInComment;

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

type City = {
  name: string;
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

type Users = User[];

type Offers = Offer[];

type DetailedOffers = DetailedOffer[];

type Comments = Comment[];

export type {Offer, Offers, DetailedOffer, DetailedOffers, Comments, Comment, User, Users, City, Location};
