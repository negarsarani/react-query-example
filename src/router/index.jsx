import { createBrowserRouter } from 'react-router-dom';
import Userslist from '../pages/userslist';
import App from '../App';
import Userdetails from '../pages/userdetails';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: 'user',
    element: <Userslist />,
  },
  {
    path: 'user/:id',
    element: <Userdetails/>,
  },
]);
