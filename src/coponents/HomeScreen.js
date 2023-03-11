import React from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import {styles} from '../styles/styles';
import CardList from './CardList';

export const HomeScreen = ({data, navigation, setDetails}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({item: card}) => (
            <CardList
              {...card}
              setDetails={setDetails}
              navigation={navigation}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};
