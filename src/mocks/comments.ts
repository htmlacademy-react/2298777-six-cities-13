import { Comments } from '../types/app-type';

const comments : Comments = [
  {
    id: '1',
    date: new Date('2020-10-10T14:48:00.000Z'),
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5
  },
  {
    id: '2',
    date: new Date('2020-10-10T14:48:00.000Z'),
    user: {
      name: 'Bill',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: '3',
    date: new Date('2020-10-10T14:48:00.000Z'),
    user: {
      name: 'Nick',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 2
  }
];

export default comments;
