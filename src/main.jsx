import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import SingleGroup from './pages/SingleGroup/SingleGroup.jsx';
import WelcomePage from './pages/WelcomePage/WelcomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import GroupDeshbord from './pages/GroupDeshbord/GroupDeshbord.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <WelcomePage></WelcomePage>,
  },
  {
    path: "login",
    errorElement: <ErrorPage />,
    element: <LoginPage />,
  },
  {
    path: "home",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "all-group",
        element: <Home />,
      },
      {
        path: 'group-dashboard',
        element: <GroupDeshbord></GroupDeshbord>
      },
      {
        path: "group",
        element: <SingleGroup />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
