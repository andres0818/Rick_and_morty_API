//@ts-nocheck
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './coponents/HomeScreen';
import {DetailsScreen} from './coponents/DetailsScreen';
import Context from './Context/Context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{title: 'Home'}}>
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
