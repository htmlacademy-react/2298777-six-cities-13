import { NameSpace } from '../../../const';
import { State } from '../../../types/store';

export const getFavorites = (state: Pick<State, NameSpace.Favorites>) => state[NameSpace.Favorites].favorites;

export const getIsFavoritesLoading = (state: Pick<State, NameSpace.Favorites>) => state[NameSpace.Favorites].isFavoritesLoading;

export const getFavoritesError = (state: Pick<State, NameSpace.Favorites>) => state[NameSpace.Favorites].error;
