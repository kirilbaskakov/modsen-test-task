import React from 'react';

const routes = [
  {
    path: '',
    element: React.lazy(() => import('#pages/MainPage')),
  },
  {
    path: '/details/:id',
    element: React.lazy(() => import('#pages/DetailsPage')),
  },
  {
    path: '/favorites',
    element: React.lazy(() => import('#pages/FavoritesPage')),
  },
];

export default routes;
