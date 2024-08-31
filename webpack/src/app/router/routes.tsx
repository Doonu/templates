import { IRoutes } from '@app/router/IRoutes';
import NotFoundPage from '@pages/NotFoundPage';
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePageLazy = lazy(() => import('../../pages/HomePage'));
const AboutPageLazy = lazy(() => import('../../pages/AboutPage'));

export const publicRoutes = createBrowserRouter([
  {
    path: IRoutes.HOME_PAGE,
    element: <HomePageLazy />,
    errorElement: <NotFoundPage />,
    children: [],
  },
  {
    path: '/About',
    element: <AboutPageLazy />,
  },
]);
