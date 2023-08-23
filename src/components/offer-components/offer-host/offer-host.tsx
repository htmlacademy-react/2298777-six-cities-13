import { FC } from 'react';
import { Host } from '../../../types/app-type';
import cn from 'classnames';

type OfferHostProps = {
  host: Host;
  description: string;
};

const OfferHost : FC<OfferHostProps> = ({host, description}) => (
  <div className="offer__host">
    <h2 className="offer__host-title">Meet the host</h2>
    <div className="offer__host-user user">
      <div className={cn('offer__avatar-wrapper', {'offer__avatar-wrapper--pro': host.isPro}, 'user__avatar-wrapper')}>
        <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
      </div>
      <span className="offer__user-name">
        {host.name}
      </span>
      {host.isPro && <span className="offer__user-status">Pro</span>}
    </div>
    <div className="offer__description">
      <p className="offer__text">
        {description}
      </p>
    </div>
  </div>
);

export default OfferHost;
