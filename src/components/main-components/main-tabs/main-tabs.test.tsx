import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import { render, screen } from '@testing-library/react';
import MainTabs from './main-tabs';

vi.mock('../../../hooks/use-store');

describe('Component: main tabs', () => {
  it('should render properly', () => {
    const component = withStore(withHistory(<MainTabs/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-tabs')).toBeInTheDocument();
  });
});
