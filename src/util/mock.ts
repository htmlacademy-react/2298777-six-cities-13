import {internet, datatype, date, lorem, name} from 'faker';
import {Comments} from '../types/app-type';

const generateComment = () : Comments => new Array(15).fill(null).map(() => (
  {
    id: datatype.uuid(),
    date: date.recent(),
    user: {
      name: name.firstName(),
      avatarUrl: internet.avatar(),
      isPro: datatype.boolean(),
    },
    comment: lorem.sentences(),
    rating: datatype.number({min: 1, max: 5}),
  }
));

export {generateComment};
