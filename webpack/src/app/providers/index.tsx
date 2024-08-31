import { GlobalStyles } from '@app/styles';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { FC, PropsWithChildren } from 'react';

import WithAntdConfig from './WithAntdConfig';
import WithPersist from './WithPersist';
import WithQueryClient from './WithQueryClient';
import WithStore from './WithStore';
import WithTheme from './WithTheme';

dayjs.locale(ru);
dayjs.extend(utc);
dayjs.extend(timezone);

const WithProviders: FC<PropsWithChildren> = ({ children }) => (
  <WithStore>
    <WithQueryClient>
      <WithPersist>
        <WithTheme>
          <WithAntdConfig>
            <GlobalStyles />
            {children}
          </WithAntdConfig>
        </WithTheme>
      </WithPersist>
    </WithQueryClient>
  </WithStore>
);

export default WithProviders;
