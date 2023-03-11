import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {cardConText} from '../Context/Context';
import Loaging from '../Loading/Loading';
import CardList from './CardList';
import {styles} from '../styles/styles';

export const HomeScreen = ({navigation}) => {
  const {data} = useContext(cardConText);
  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({item: card}) => (
            <CardList {...card} navigation={navigation} />
          )}
        />
      ) : (
        <Loaging />
      )}
    </View>
  );
};
