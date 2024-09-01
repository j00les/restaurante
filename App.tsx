import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/Routes/MainStack';
import store from './src/Store';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <MainStack />
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default App;
