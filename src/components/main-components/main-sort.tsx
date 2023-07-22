import { FC, useState, useRef } from 'react';
import { SortOptions } from '../../const';
import useOutside from '../../hooks/use-outside';
import MainSortOptions from './main-sort-options';

type MainSortProps = {
  selectedSort: keyof typeof SortOptions;
  onSortChange: (sort: keyof typeof SortOptions) => void;
}

const MainSort : FC<MainSortProps> = ({selectedSort, onSortChange}) => {
  const ref = useRef(null);
  const [isOpened, setOpenedState] = useState(false);
  useOutside(ref, () => setOpenedState(false));
  return (
    <form className="places__sorting" action="#" method="get" ref={ref}>
      <span className="places__sorting-caption">Sort by     </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenedState(!isOpened)}>
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <MainSortOptions selectedSort={selectedSort} onSortChange={onSortChange} isOpened={isOpened} setOpenedState={setOpenedState}/>
    </form>
  );
};

export default MainSort;
