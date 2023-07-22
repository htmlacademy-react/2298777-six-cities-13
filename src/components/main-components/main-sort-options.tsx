import { FC, useState, useRef } from 'react';
import { SortOptions } from '../../const';
import cn from 'classnames';
import useOutside from '../../hooks/use-otside';

type MainSortOptionsProps = {
  selectedSort: keyof typeof SortOptions;
  onSortChange: (sort: keyof typeof SortOptions) => void;
}

const MainSortOptions : FC<MainSortOptionsProps> = ({selectedSort, onSortChange}) => {
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
      <ul className={cn('places__options', ' places__options--custom', {'places__options--opened': isOpened})}>
        {Object.values(SortOptions).map((option) => (
          <li
            key={option}
            className={cn('places__option', {'places__option--active': selectedSort === option})}
            tabIndex={0}
            onClick={() => {
              onSortChange(option as keyof typeof SortOptions);
              setOpenedState(!isOpened);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default MainSortOptions;
