import Router from '@app/router';

import WithProviders from './providers';

const App = () => (
  <WithProviders>
    <Router />
  </WithProviders>
);

export default App;
