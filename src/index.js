import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
   {
    path: '/', 
    element: <h1> Home</h1>,
    errorElement: <h1> Error Path</h1>
  },
  {
    path: '/about', 
    element: <h1>About</h1>
  },
  {
    path: '/contact', 
    element: <h1>Conctact</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
