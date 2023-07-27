import store from '../store';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-action';

export default (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
