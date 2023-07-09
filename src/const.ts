const Settings = {
  NumberOfOfferCards: 5,
} as const;

const AppRoutes = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export {Settings, AppRoutes, AuthorizationStatus};
