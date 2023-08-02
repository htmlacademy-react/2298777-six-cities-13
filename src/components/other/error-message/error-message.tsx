import { FC } from 'react';
import { useAppSelector } from '../../../hooks/use-store';
import './error-message.css';

const ErrorMessage : FC = () => {
  const error = useAppSelector((state) => state.error);

  return (error) ? <div className='error-message'>{error}</div>
    : null;
};

export default ErrorMessage;
