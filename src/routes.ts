import DetailsPage from '#pages/DetailsPage';
import FavoritesPage from '#pages/FavoritesPage';
import MainPage from './pages/MainPage';

const routes = [
  {
    path: '',
    element: MainPage,
  },
  {
    path: '/details/:id',
    element: DetailsPage,
  },
  {
    path: '/favorites',
    element: FavoritesPage,
  },
];

export default routes;
