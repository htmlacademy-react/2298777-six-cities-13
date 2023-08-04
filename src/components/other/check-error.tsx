import { FC } from 'react';
import ErrorMessage from './error-message/error-message';
import Loading from './loading/loading';

type CheckErrorProps = {
  isLoading?: boolean;
  error: string | null;
  onTryAgain: () => void;
}

const CheckError : FC<CheckErrorProps> = ({isLoading, error, onTryAgain}) => {
  if (isLoading) {
    return <Loading/>;
  }

  if (error) {
    return <ErrorMessage message={error} onTryAgain={onTryAgain}/>;
  }

  return null;
};

export default CheckError;
