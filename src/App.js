import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './component/AppLayout';
import AboutUsRoute from './component/route-pages/AboutUsRoute';
import Main from './component/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [{
        path: "/",
        element: <Main />
      },
    {
      path:"about",
      element: <AboutUsRoute />
    }]
    }
  ]);
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
