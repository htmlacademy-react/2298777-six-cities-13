import { FC, useState, useRef } from 'react';
import useOutside from '../../../hooks/use-outside';
import MainSortOptions from '../main-sort-options/main-sort-options';
import { useAppSelector } from '../../../hooks/use-store';
import { getCurrentSort } from '../../../store/slices/offers-data/selectors';


const MainSort : FC = () => {
  const sort = useAppSelector(getCurrentSort);
  const ref = useRef(null);
  const [isOpened, setOpenedState] = useState(false);
  useOutside(ref, () => setOpenedState(false));
  return (
    <form className="places__sorting" action="#" method="get" ref={ref}>
      <span className="places__sorting-caption">Sort by     </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenedState(!isOpened)}>
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <MainSortOptions selectedSort={sort} isOpened={isOpened} setOpenedState={setOpenedState}/>
    </form>
  );
};

export default MainSort;
