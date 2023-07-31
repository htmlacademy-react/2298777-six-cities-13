import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';

const OfferGallery : FC = () => {
  const offer = useAppSelector((state) => state.currentOffer);

  if (!offer) {
    return null;
  }

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer.images.map((image) => (
          <div className="offer__image-wrapper" key={image}>
            <img className="offer__image" src={image} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferGallery;
