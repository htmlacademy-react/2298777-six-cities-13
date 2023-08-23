import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../../util/mock-components';
import LoginMain from './login-main';

describe('Component: login location', () => {
  it('should render correctly', () => {
    const component = withStore(withHistory(<LoginMain/>)).withStoreComponent;

    render(component);

    expect(screen.getByTestId('main-login')).toBeInTheDocument();
  });
});
