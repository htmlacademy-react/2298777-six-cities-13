import { Icon } from 'leaflet';

const AppRoutes = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '/404',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

const Stars = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
] as const;

const LoginData = {
  email: 'email',
  password: 'password',
} as const;

const PinUrl = {
  Default: 'public/img/pin.svg',
  Active: 'public/img/pin-active.svg',
} as const;

const MapIcons = {
  DefaultIcon: new Icon({
    iconUrl: PinUrl.Default,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  }),
  ActiveIcon: new Icon({
    iconUrl: PinUrl.Active,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  }),
} as const;

const SortOptions = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

const REVIEW_DATE_FORMAT = 'MMMM YYYY';

const APIRoute = {
  Offers: '/offers',
  DetailedOffer: (offerId: string) => `/offers/${offerId}`,
  OffersNearby: (offerId: string) => `/offers/${offerId}/nearby`,
  Favorite: '/favorite',
  Comments: (offerId : string) => `/comments/${offerId}`,
  Login: '/login',
  Logout: '/logout',
  postFavorite: (offerId: string, status: number) =>`/favorite/${offerId}/${status}`,
} as const;

enum NameSpace {
  Favorites = 'favoriteData',
  Offers = 'offersData',
  Offer = 'offerData',
  Comments = 'commentsData',
  User = 'userData',
  NearBy = 'nearByData',
}

const LogoSize = {
  Width: 81,
  Height: 41,
} as const;

export {AppRoutes, AuthorizationStatus, Cities, Stars, LoginData, PinUrl, MapIcons,
  SortOptions, REVIEW_DATE_FORMAT, APIRoute, NameSpace, LogoSize};
