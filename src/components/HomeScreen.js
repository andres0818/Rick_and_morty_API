import React, {useContext} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import {cardConText, dispatchCardText} from '../Context/Context';
import Loaging from '../Loading/Loading';
import CardList from './CardList';
import {styles} from '../styles/styles';

export const HomeScreen = ({navigation}) => {
  const {data} = useContext(cardConText);
  const {setCharacter} = useContext(dispatchCardText);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="black"
        placeholder="Search"
        onChangeText={e => setCharacter(e)}
      />
      {data ? (
        <FlatList
          data={data}
          contentContainerStyle={styles.row}
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
