import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import MainSortOptions from './main-sort-options';
import userEvent from '@testing-library/user-event';

vi.mock('../../../hooks/use-store');

describe('Component: main sort options', () => {
  it('should render properly when not opened', () => {
    const mockSelectedSort = 'Popular';
    const mockHandleClick = vi.fn();
    const component = withStore(withHistory(
      <MainSortOptions isOpened={false} selectedSort={mockSelectedSort} setOpenedState={mockHandleClick}/>
    )).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-sort-options')).toBeInTheDocument();
    expect(screen.getByTestId('main-sort-options')).not.toHaveClass('places__options--opened');
    expect(screen.getByTestId(`${mockSelectedSort}-sort`)).toHaveClass('places__option--active');
    expect(screen.getByText(mockSelectedSort)).toHaveClass('places__option--active');
    expect(screen.getByText('Top rated first')).not.toHaveClass('places__option--active');
  });

  it('should render properly when opened', () => {
    const mockSelectedSort = 'Popular';
    const mockHandleClick = vi.fn();
    const component = withStore(withHistory(
      <MainSortOptions isOpened selectedSort={mockSelectedSort} setOpenedState={mockHandleClick}/>
    )).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-sort-options')).toBeInTheDocument();
    expect(screen.getByTestId('main-sort-options')).toHaveClass('places__options--opened');
    expect(screen.getByTestId(`${mockSelectedSort}-sort`)).toHaveClass('places__option--active');
    expect(screen.getByText(mockSelectedSort)).toHaveClass('places__option--active');
    expect(screen.getByText('Top rated first')).not.toHaveClass('places__option--active');
  });

  it('should dispatch action when click on li element', async () => {
    const mockSelectedSort = 'Popular';
    const mockStore = await import('../../../hooks/use-store');
    const checkDispatch = vi.fn();
    const mockHandleClick = vi.fn();
    mockStore.useAppDispatch = vi.fn(() => checkDispatch);
    const component = withStore(withHistory(
      <MainSortOptions isOpened selectedSort={mockSelectedSort} setOpenedState={mockHandleClick}/>
    )).withStoreComponent;

    render(component);

    expect(checkDispatch).toBeCalledTimes(0);
    expect(mockHandleClick).toBeCalledTimes(0);

    await userEvent.click(screen.getByText(mockSelectedSort));

    expect(checkDispatch).toBeCalledTimes(1);
    expect(mockHandleClick).toBeCalledTimes(1);
  });
});
