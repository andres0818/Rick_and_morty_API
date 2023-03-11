import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {cardConText} from '../Context/Context';
import {styles} from '../styles/styles';
import CardList from './CardList';

export const HomeScreen = ({navigation}) => {
  const {data} = useContext(cardConText);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({item: card}) => (
          <CardList {...card} navigation={navigation} />
        )}
      />
    </View>
  );
};
