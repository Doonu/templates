import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NotFoundPage from '../../pages/NotFoundPage';
import { IRoutes } from '../providers/WithRouter/model/IRoutes';

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
