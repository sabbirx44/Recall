import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProvider from './providers/AuthProvider';
import Orders from './components/Orders';
import PrivetRoute from './PrivateRoutes/PrivetRoute';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/orders",
        element: <PrivetRoute><Orders /></PrivetRoute>
      },
      {
        path: "/profile",
        element: <PrivetRoute><Profile /></PrivetRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /> {/* Children */}
    </AuthProvider>
  </React.StrictMode>,
)
