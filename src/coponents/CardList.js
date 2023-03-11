import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {styles} from '../styles/styles';

const CardList = ({navigation, setDetails, ...props}) => {
  const handlerPress = data => {
    setDetails(data);
    return navigation.navigate('Details');
  };
  return (
    <View style={styles.cardsContainer} key={props.id}>
      <Image style={styles.image} source={{uri: props.image}} />
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.species}</Text>
      <Button
        title="Open"
        color="#f194ff"
        onPress={() => handlerPress(props)}
      />
    </View>
  );
};

export default CardList;
