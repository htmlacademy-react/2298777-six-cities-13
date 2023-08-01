import store from '../store';
//import { clearErrorAction } from '../store/api-action';
import { appProcess } from '../store/slices/app-process';

export default (message: string) => {
  store.dispatch(appProcess.actions.setError(message));
  //store.dispatch(clearErrorAction());
};
