import React from 'react';
import {View, ScrollView, Text, Image, Button} from 'react-native';
import {styles} from './styles';

export const HomeScreen = ({data, navigation, setDetails}) => {
  const handlerPress = e => {
    setDetails(e);
    return navigation.navigate('Details');
  };

  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        {data?.map(e => {
          const {name, image, id, species} = e;

          return (
            <View style={styles.cardsContainer} key={id}>
              <Image style={styles.image} source={{uri: image}} />
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.text}>{species}</Text>
              <Button
                title="Open"
                color="#f194ff"
                onPress={() => handlerPress(e)}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
