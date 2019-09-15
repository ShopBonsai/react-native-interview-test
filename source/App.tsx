import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';

import Routes from './routes';
import store, { persistor } from './store';
import withSafeArea from './containers/HOCs/withSafeArea';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <FlashMessage />
      </PersistGate>
    </Provider>
  );
};

export default withSafeArea(App);
