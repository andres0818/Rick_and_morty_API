import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../styles/styles';

export const DetailsScreen = ({details}) => {
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
