import React, {useContext} from 'react';
import {
  Button,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {dispatchCardText} from '../Context/Context';
import {cardStyle} from '../styles/cards';

const CardList = ({navigation, ...props}) => {
  const {setDetails} = useContext(dispatchCardText);

  const handlerPress = data => {
    setDetails(data);
    return navigation.navigate('Details');
  };

  const containerStyle = [
    cardStyle.cardsContainer,
    props.species === 'Human' && cardStyle.Human,
    props.species === 'Alien' && cardStyle.Alien,
    props.species === 'Mythological Creature' && cardStyle.Mytological,
  ];

  return (
    <TouchableWithoutFeedback onPress={() => handlerPress(props)}>
      <View style={containerStyle} key={props.id}>
        <View style={cardStyle.containerDescription}>
          <Text style={cardStyle.title}>{props.name}</Text>
          <Text style={cardStyle.text}>Specie: {props.species}</Text>
        </View>
        <View>
          <Image style={cardStyle.image} source={{uri: props.image}} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardList;
