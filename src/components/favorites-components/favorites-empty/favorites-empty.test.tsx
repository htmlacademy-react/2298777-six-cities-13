import { describe } from 'vitest';
import FavoritesEmpty from './favorites-empty';
import { render, screen } from '@testing-library/react';

describe('Component: favorites empty', () => {
  it('should render properly', () => {
    const firstText = /Nothing yet saved./i;
    const secondText = /Save properties to narrow down search or plan your future trips./i;

    render(<FavoritesEmpty/>);

    expect(screen.getByText(firstText)).toBeInTheDocument();
    expect(screen.getByText(secondText)).toBeInTheDocument();
  });
});
