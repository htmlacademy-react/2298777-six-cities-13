import { FC } from 'react';
import './error-message.css';

const ErrorMessage : FC<{message: string; onTryAgain: () => void}> = ({message, onTryAgain}) => (
  <div className="error-message">
    <p className="error-message__text">{message}</p>
    <button className="error-message__button" type="button" onClick={onTryAgain}>try again</button>
  </div>
);


export default ErrorMessage;
