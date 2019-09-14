import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import withSafeArea from './containers/HOCs/withSafeArea';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default withSafeArea(App);
