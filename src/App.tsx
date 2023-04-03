//@ts-nocheck
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './components/HomeScreen';
import {DetailsScreen} from './components/DetailsScreen';
import Context from './Context/Context';
import {IconNavBar} from './components/IconNavBar/IconNavBar';
import logo from './logo/Rick_and_Morty.png';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerTitle: () => <IconNavBar icon={logo} width="100%" />,
            }}>
            {props => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Details">
            {props => <DetailsScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}
