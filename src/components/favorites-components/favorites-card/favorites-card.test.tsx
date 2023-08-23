import { describe } from 'vitest';
import { withStore, withHistory } from '../../../util/mock-components';
import FavoritesCard from './favorites-card';
import { render, screen } from '@testing-library/react';
import { generateOfferCards } from '../../../util/mock';

vi.mock('../../../hooks/use-store');

describe('Component: favorite card', () => {

  it('should render properly', async () => {
    const mockOffer = generateOfferCards()[0];
    const mockSelector = (await import('../../../hooks/use-store'));
    mockSelector.useAppSelector = vi.fn(() => 'AUTH');
    const component = withStore(withHistory(<FavoritesCard offer={mockOffer}/>)).withStoreComponent;
    render(component);

    expect(screen.getByTestId('favorites-card')).toBeInTheDocument();
  });
});
