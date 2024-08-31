import { store } from '@app/store';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

const WithStore: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default WithStore;
