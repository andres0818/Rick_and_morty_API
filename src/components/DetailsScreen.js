import React, {useContext, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {cardConText} from '../Context/Context';
import {IconNavBar} from './IconNavBar/IconNavBar';
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

  const containerStyle = [
    detailsStyles.container,
    details.species === 'Alien' && detailsStyles.Alien,
    details.species === 'Mythological Creature' && detailsStyles.Mytological,
    details.species === 'Human' && detailsStyles.Human,
  ];

  const containerText = [
    detailsStyles.textContainer,
    details.species === 'Alien' && detailsStyles.Alien,
    details.species === 'Mythological Creature' && detailsStyles.Mytological,
    details.species === 'Human' && detailsStyles.Human,
  ];

  return (
    <View style={containerStyle}>
      <View style={detailsStyles.containerInfo}>
        <Text style={detailsStyles.title}>{details.name}</Text>
        <Text style={detailsStyles.subTitle}>Specie: {details.species}</Text>
      </View>
      <View style={detailsStyles.containerDescription}>
        <View style={detailsStyles.imgContainer}>
          <Image style={detailsStyles.img} source={{uri: details.image}} />
        </View>
        <View style={detailsStyles.description}>
          <View style={containerText}>
            <Text style={detailsStyles.descriptionTitle}>Status: </Text>
            <Text style={detailsStyles.descriptionSubTitle}>
              {details.status}
            </Text>
          </View>
          <View style={containerText}>
            <Text style={detailsStyles.descriptionTitle}>Gender: </Text>
            <Text style={detailsStyles.descriptionSubTitle}>
              {details.gender}
            </Text>
          </View>
          <View style={containerText}>
            <Text style={detailsStyles.descriptionTitle}>origin: </Text>
            <Text
              style={detailsStyles.descriptionSubTitle}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {details.origin.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
