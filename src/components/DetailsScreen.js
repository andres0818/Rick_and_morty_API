import React, {useContext, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {cardConText} from '../Context/Context';
import {styles} from '../styles/styles';
import {IconNavBar} from './IconNavBar/IconNavBar';

export const DetailsScreen = ({navigation}) => {
  const {details} = useContext(cardConText);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <IconNavBar icon={details.image} title={details.name} radius={true} />
      ),
    });
  }, [details, navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: details.name,
    });
  }, [details.name, navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: details.image}} />
      <Text style={styles.text}>Name: {details.name}</Text>
      <Text style={styles.text}>Status: {details.status}</Text>
      <Text style={styles.text}>Specie: {details.species}</Text>
      <Text style={styles.text}>Gender: {details.gender}</Text>
      <Text style={styles.text}>{details.origin.name}</Text>
    </View>
  );
};
