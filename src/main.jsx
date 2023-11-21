import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Root from './Root/Root';
import AuthProvider from './Providers/AuthProvider';
import Price from './Pages/Price/Price';
import PastEvents from './Pages/PastEvents/PastEvents';
import ServiceDetails from './Pages/ServiceDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './Layouts/Login/Login';
import Register from './Layouts/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/service/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/price',
        element: <PrivateRoute><Price></Price></PrivateRoute>
      },
      {
        path: '/pastEvents',
        element: <PrivateRoute><PastEvents></PastEvents></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
