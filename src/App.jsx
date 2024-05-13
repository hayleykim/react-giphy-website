import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import Category from './pages/Category';
import Search from './pages/Search';
import GifPage from './pages/GifPage';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import GifProvider from './context/GifContext';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:category',
        element: <Category />
      },
      {
        path: '/search/:query',
        element: <Search />
      },
      {
        path: '/:type/:slug',
        element: <GifPage />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
    ]
  }
])

function App() {

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  )
}

export default App;
