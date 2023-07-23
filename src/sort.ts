import { Offers } from './types/app-type';
import { SortOptions } from './const';

const sort = (offers: Offers, currentSort : string) => {
  switch (currentSort) {
    case SortOptions.LowToHigh:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortOptions.HighToLow:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortOptions.TopRatedFirst:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};


export default sort;
