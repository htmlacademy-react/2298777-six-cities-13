import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../util/mock-components';
import Page404 from './page-404';

describe('Component: page 404', () => {

  it('should render correctly', () => {
    const component = withStore(withHistory(<Page404/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });
});
