import React, {Suspense} from 'react';
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "../../routes";

const WithRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={publicRoutes}></RouterProvider>
        </Suspense>
    );
};

export default WithRouter;
