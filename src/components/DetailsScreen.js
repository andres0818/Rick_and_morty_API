import React, {useContext, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {cardConText} from '../Context/Context';
import {IconNavBar} from './IconNavBar/IconNavBar';
import {cardStyle} from '../styles/cards';
import {detailsStyles} from '../styles/details';

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

  const containerStyle = [
    detailsStyles.container,
    details.species === 'Alien' && detailsStyles.Alien,
    details.species === 'Mythological Creature' && detailsStyles.Mytological,
    details.species === 'Human' && detailsStyles.Human,
  ];

  return (
    <View style={containerStyle}>
      <View style={detailsStyles.containerInfo}>
        <Text style={detailsStyles.title}>Name: {details.name}</Text>
        <Text>Specie: {details.species}</Text>
      </View>
      <View style={detailsStyles.containerDescription}>
        <Image style={detailsStyles.img} source={{uri: details.image}} />
      </View>
    </View>
  );
};

{
  /* 
        <Text style={styles.text}>Status: {details.status}</Text>

<Text style={styles.text}>Gender: {details.gender}</Text>
<Text style={styles.text}>{details.origin.name}</Text> */
}
