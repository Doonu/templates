import { scConfig } from '@app/styles';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const WithTheme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={scConfig}>{children}</ThemeProvider>
);

export default WithTheme;
