import { FC } from 'react';
import { SortOptions } from '../../../const';
import cn from 'classnames';
import { useAppDispatch } from '../../../hooks/use-store';
import { ValueOf } from '../../../types/app-type';
import { offersData } from '../../../store/slices/offers-data/offers-data';


type MainSortOptionsProps = {
  selectedSort: ValueOf<typeof SortOptions>;
  isOpened: boolean;
  setOpenedState: (value: React.SetStateAction<boolean>) => void;
}

const MainSortOptions : FC<MainSortOptionsProps> = ({selectedSort, isOpened, setOpenedState}) => {
  const dispatch = useAppDispatch();
  return(
    <ul
      className={cn('places__options', ' places__options--custom', {'places__options--opened': isOpened})}
      data-testid='main-sort-options'
    >
      {Object.values(SortOptions).map((option) => (
        <li
          key={option}
          className={cn('places__option', {'places__option--active': selectedSort === option})}
          tabIndex={0}
          onClick={() => {
            dispatch(offersData.actions.setCurrentSort(option));
            setOpenedState(!isOpened);
          }}
          data-testid={`${option}-sort`}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default MainSortOptions;
