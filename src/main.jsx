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
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/price',
        element: <Price></Price>
      },
      {
        path: '/pastEvents',
        element: <PastEvents></PastEvents>
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
