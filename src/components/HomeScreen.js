import React, {useContext, useLayoutEffect, useRef, useState} from 'react';
import {View, FlatList, TextInput, Dimensions} from 'react-native';
import {cardConText, dispatchCardText} from '../Context/Context';
import Loaging from '../Loading/Loading';
import CardList from './CardList';
import {styles} from '../styles/styles';

export const HomeScreen = ({navigation}) => {
  const {data} = useContext(cardConText);
  const {setCharacter} = useContext(dispatchCardText);

  const dimensionsRef = useRef(Dimensions.get('window'));

  const [numColumns, setNumColumns] = useState(
    dimensionsRef.current.width > 760 ? 2 : 1,
  );

  useLayoutEffect(() => {
    const onLayout = () => {
      dimensionsRef.current = Dimensions.get('window');
      setNumColumns(dimensionsRef.current.width > 760 ? 2 : 1);
    };

    Dimensions.addEventListener('change', onLayout);

    return () => Dimensions.removeEventListener('change', onLayout);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="black"
        placeholder="Search"
        onChangeText={e => setCharacter(e)}
      />
      {data ? (
        <View style={styles.flatListContainer}>
          <FlatList
            numColumns={numColumns}
            data={data}
            contentContainerStyle={styles.row}
            renderItem={({item: card}) => (
              <CardList {...card} navigation={navigation} />
            )}
            key={numColumns}
          />
        </View>
      ) : (
        <Loaging />
      )}
    </View>
  );
};
