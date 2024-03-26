import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';
import NavBar from './layouts/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </NextUIProvider>
)
