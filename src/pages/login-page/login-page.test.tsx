import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../util/mock-components';
import LoginPage from './login-page';

describe('Component: favorite-list', () => {

  it('should render page when no error or not loading', () => {
    const component = withStore(withHistory(<LoginPage/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('page-login')).toBeInTheDocument();
  });
});
