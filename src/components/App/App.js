import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from '../../store';

import SampleList from '../SampleList';
import SampleItem from '../SampleItem';
import SampleAdd from '../SampleAdd/SampleAdd';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator
            initialRouteName="List"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#333333',
              },
              headerTintColor: '#fff',
            }}>
            <Stack.Screen
              name="List"
              component={SampleList}
              options={{title: 'Muestras'}}
            />
            <Stack.Screen name="Item" component={SampleItem} />
            <Stack.Screen
              name="Add"
              component={SampleAdd}
              options={{
                title: 'Nueva muestra',
                headerBackImage: () => (
                  <Icon name="close" color="#fff" size={24} />
                ),
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
