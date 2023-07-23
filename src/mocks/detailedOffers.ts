import { DetailedOffers } from '../types/app-type';
import offers from './offers';

const additionalInfo = [
  {
    id: '1',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '2',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '3',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '4',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '5',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '6',
    description: 'luxury skuf apartment',
    bedrooms: 1,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Ilya',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ],
    maxAdults: 2
  },
  {
    id: '7',
    description: 'luxury skuf room',
    bedrooms: 20,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      name: 'Pivnoy',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ],
    maxAdults: 20
  },
];

const createDetailedOffers = () : DetailedOffers => {
  const length = Math.min(offers.length, additionalInfo.length);
  const detailedOffers = [];
  for (let i = 0; i < length; i++) {
    const res = additionalInfo.find((offer) => offer.id === offers[i].id);
    if (res) {
      detailedOffers.push({ ...offers[i], ...res });
    }
  }
  return detailedOffers;
};

const detailedOffers : DetailedOffers = createDetailedOffers();

export default detailedOffers;
