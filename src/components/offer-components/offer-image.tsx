import { FC } from 'react';

type OfferImageProps = {
  imageAddress: string;
}

const OfferImage : FC<OfferImageProps> = ({imageAddress}) => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={imageAddress} alt="Photo studio"/>
  </div>
);

export default OfferImage;
