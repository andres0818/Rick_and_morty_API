//@ts-nocheck
import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {getApi} from '../api/api';
import {HomeScreen} from './coponents/HomeScreen';
import {DetailsScreen} from './coponents/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  const [data, setData] = useState();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getData = () => {
      getApi()
        .then(result => {
          setData(result.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: 'Home'}}>
          {props => (
            <HomeScreen {...props} data={data} setDetails={setDetails} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} details={details} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
