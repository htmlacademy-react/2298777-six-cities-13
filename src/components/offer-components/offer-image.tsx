type OfferImageProps = {
  imageAddress: string;
}

function OfferImage({imageAddress} : OfferImageProps) : JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={imageAddress} alt="Photo studio"/>
    </div>
  );
}

export default OfferImage;
