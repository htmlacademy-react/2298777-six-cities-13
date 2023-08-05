import { CityString, Offers } from './types/app-type';
import moment from 'moment';

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const createRoute = (...nodes: string[]) => nodes.join('/');

const getStarWidth = (rating: number) => `${Math.round(rating) * 20}%`;

const filterOfferByCity = (offers : Offers, city : string) =>
  offers.filter((offer) => offer.city.name === city);

const humanizeDate = (date: Date | string, format: string) => moment(date).format(format);

const getCurrentCityOffers = (offers : Offers, city: CityString) => offers.filter((offer) => offer.city.name === city);

const parseStatusCode = (message: string) => Number(message.split(' ').pop());

export { capitalizeFirstLetter, createRoute, getStarWidth, filterOfferByCity,
  humanizeDate, getCurrentCityOffers, parseStatusCode };
