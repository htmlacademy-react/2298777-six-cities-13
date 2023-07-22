import { Offers } from './types';
import moment from 'moment';

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const createRoute = (...nodes: string[]) => nodes.join('/');

const getStarWidth = (rating: number) => `${Math.round(rating) * 20}%`;

const filterOfferByCity = (offers : Offers, city : string) =>
  offers.filter((offer) => offer.city.name === city);

const humanizeDate = (date: Date | string, format: string) => moment(date).format(format);

export { capitalizeFirstLetter, createRoute, getStarWidth, filterOfferByCity, humanizeDate };
