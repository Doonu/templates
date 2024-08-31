import { queryClient } from '@app/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { FC, PropsWithChildren } from 'react';

const WithQueryClient: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    {children}
  </QueryClientProvider>
);

export default WithQueryClient;
