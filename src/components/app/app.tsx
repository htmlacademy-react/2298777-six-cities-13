import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from '../../store';
import 'react-toastify/dist/ReactToastify.css';
import routeConfig from './route-config';


const App : FC = () => {
  const router = createBrowserRouter(routeConfig);

  return (
    <Provider store={store}>
      <ToastContainer/>
      <RouterProvider router={router}/>
    </Provider>
  );
};

export default App;
