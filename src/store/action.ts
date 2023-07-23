import { createAction } from '@reduxjs/toolkit';
import { CityString } from '../types/app-type';
import { SortOptions } from '../const';

const setCurrentCity = createAction<{city: CityString}>('setCurrentCity');
const setCurrentSort = createAction<{sort: keyof typeof SortOptions}>('setCurrentSort');
const setCurrentOffer = createAction<{id: string}>('setCurrentOffer');

export { setCurrentCity, setCurrentSort, setCurrentOffer };
