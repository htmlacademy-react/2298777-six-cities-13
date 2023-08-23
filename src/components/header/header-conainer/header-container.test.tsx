import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import HeaderContainer from './header-container';
import { render, screen } from '@testing-library/react';

vi.mock('../../../hooks/use-store');

describe('Component: Header container', () => {
  it('should render correctly when nav is shown', () => {
    const component = withStore(withHistory(<HeaderContainer isNavShown/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });

  it('should render correctly when no nav is shown', () => {
    const component = withStore(withHistory(<HeaderContainer isNavShown={false}/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.queryByTestId('header-nav')).not.toBeInTheDocument();
  });
});
