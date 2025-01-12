import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './component/AppLayout';
import AboutUsRoute from './component/route-pages/AboutUsRoute';
import Main from './component/Main';
import AdoptNow from './component/route-pages/AdoptNow';
import ErrorPage from './component/route-pages/ErrorPage';
import Contact from './component/route-pages/Contact';
import PostPet from './component/route-pages/PostPet';
import DogDetails from './component/route-pages/DogDetails';
import CatDetails from './component/route-pages/CatDetails';
import GalleryPage from './component/route-pages/GalleryPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [{
        path: "/",
        element: <Main />
      },
    {
      path:"about",
      element: <AboutUsRoute />
    },
    {
      path:"adopt-now",
      element: <AdoptNow />
    },
  {
    path:"contact",
    element: <Contact />
  },
  {
    path:"post-adoption",
    element: <PostPet />
  },
  {
    path:"/dog",
    element: <DogDetails />
  },
  {
    path:"/cat",
    element: <CatDetails />
  },
  {
    path:"/gallery",
    element: <GalleryPage />
  }]
    }
  ]);
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
