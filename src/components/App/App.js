import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from '../../store';

const App: () => React$Node = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Text>A ver pues</Text>
        </PaperProvider>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
