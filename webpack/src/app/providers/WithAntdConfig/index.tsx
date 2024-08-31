import { antdTheme } from '@app/styles';
import { ConfigProvider } from 'antd';
import React, { FC, PropsWithChildren } from 'react';

const WithAntdConfig: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
);

export default WithAntdConfig;
