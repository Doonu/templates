import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { publicRoutes } from '../../routes';

const WithRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={publicRoutes} />
  </Suspense>
);

export default WithRouter;
