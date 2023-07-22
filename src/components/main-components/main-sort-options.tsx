import { FC } from 'react';
import { SortOptions } from '../../const';
import cn from 'classnames';


type MainSortOptionsProps = {
  selectedSort: keyof typeof SortOptions;
  onSortChange: (sort: keyof typeof SortOptions) => void;
  isOpened: boolean;
  setOpenedState: (value: React.SetStateAction<boolean>) => void;
}

const MainSortOptions : FC<MainSortOptionsProps> = ({selectedSort, onSortChange, isOpened, setOpenedState}) => (
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
);

export default MainSortOptions;
