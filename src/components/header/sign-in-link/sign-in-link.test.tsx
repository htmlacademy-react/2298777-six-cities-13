import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import SignInLink from './sign-in-link';
import { render, screen } from '@testing-library/react';

describe('Component: profile nav link', () => {
  it('should render properly', () => {
    const component = withStore(withHistory(<SignInLink/>)).withStoreComponent;

    render(component);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
