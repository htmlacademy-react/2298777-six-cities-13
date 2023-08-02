import { toast } from 'react-toastify';
import { loginAction } from '../store/api-action';
import passwordSchema from '../components/login-components/login-form/password-schema';
import React, { MutableRefObject, useEffect } from 'react';
import store from '../store';

type SetDisabled = React.Dispatch<React.SetStateAction<boolean>>;
type FormData = {email: string; password: string};
type Ref = MutableRefObject<HTMLElement | null>;

const useFormSubmit = (ref: Ref, formData: FormData, setDisabled: SetDisabled) => {
  useEffect(() => {

    if (ref.current === null) {
      return;
    }

    const handleSubmit = (evt : SubmitEvent) => {
      evt.preventDefault();
      const errorList = passwordSchema.validate(formData.password, {details: true}) as {message: string}[];
      if (errorList.length === 0) {
        setDisabled(true);
        store.dispatch(loginAction(formData))
          .then((data) => {
            if (data.meta.requestStatus === 'rejected') {
              toast.warn('Invalid email');
            }
          })
          .finally(() => setDisabled(false));
      } else {
        toast.warn(errorList[0].message);
      }
    };

    ref.current.addEventListener('submit', handleSubmit);

    return () => {
      ref.current?.removeEventListener('submit', handleSubmit);
    };
  }, [formData, ref, setDisabled]);
};

export default useFormSubmit;
