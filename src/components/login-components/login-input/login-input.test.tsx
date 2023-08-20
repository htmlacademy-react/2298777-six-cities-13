import { describe } from 'vitest';
import { withHistory, withStore } from '../../../util/mock-components';
import LoginInput from './login-input';
import { render, screen } from '@testing-library/react';
import { LoginData } from '../../../const';
import userEvent from '@testing-library/user-event';

describe('Component: login input', () => {
  it('should render correctly when label is email', () => {
    const mockHandleInput = vi.fn();
    const component = withStore(withHistory(<LoginInput label={LoginData.email} onFormDataChange={mockHandleInput}/>)).withStoreComponent;

    render(component);

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('should render correctly when label is password', () => {
    const mockHandleInput = vi.fn();
    const component = withStore(withHistory(<LoginInput label={LoginData.password} onFormDataChange={mockHandleInput}/>)).withStoreComponent;

    render(component);

    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should correctly handle email input', async () => {
    const mockHandleInput = vi.fn();
    const email = 'test@mail.com';
    const component = withStore(withHistory(<LoginInput label={LoginData.email} onFormDataChange={mockHandleInput}/>)).withStoreComponent;

    render(component);

    await userEvent.type(screen.getByPlaceholderText('Email'), email);

    expect(screen.getByDisplayValue(email)).toBeInTheDocument();
    expect(mockHandleInput).toBeCalledTimes(email.length);
  });

  it('should correctly handle password input', async () => {
    const mockHandleInput = vi.fn();
    const password = 'milfBuster228';
    const component = withStore(withHistory(<LoginInput label={LoginData.password} onFormDataChange={mockHandleInput}/>)).withStoreComponent;

    render(component);

    await userEvent.type(screen.getByPlaceholderText('Password'), password);

    expect(screen.getByDisplayValue(password)).toBeInTheDocument();
    expect(mockHandleInput).toBeCalledTimes(password.length);
  });
});
