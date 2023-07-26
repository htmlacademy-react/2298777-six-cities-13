import {FC} from 'react';
import { Comment } from '../../types/app-type';


const OfferReviewUser : FC<{comment: Comment}> = ({comment}) => (
  <div className="reviews__user user">
    <div className="reviews__avatar-wrapper user__avatar-wrapper">
      <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
    </div>
    <span className="reviews__user-name">
      {comment.user.name}
    </span>
  </div>
);

export default OfferReviewUser;
