import { Offers } from '../types';

const offers : Offers = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg'
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.369204,
        longitude: 4.901319,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.9,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.369204,
        longitude: 4.901319,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: '5',
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg'
  },
  {
    id: '6',
    title: 'skuf apartment',
    type: 'Apartment',
    price: 322,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.369204,
        longitude: 4.901319,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '7',
    title: 'skuf room',
    type: 'Private room',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.369204,
        longitude: 4.901319,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 13
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.2,
    previewImage: 'img/room.jpg'
  },
];

export default offers;
