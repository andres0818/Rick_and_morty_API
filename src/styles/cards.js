import {StyleSheet} from 'react-native';
import {blue, green, purple} from './color';

export const cardStyle = StyleSheet.create({
  Human: {
    backgroundColor: blue,
  },
  Alien: {
    backgroundColor: green,
  },
  Mytological: {
    backgroundColor: purple,
  },
  cardsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 12,
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    width: 320,
    elevation: 10,
  },
  containerDescription: {
    width: '50%',
    padding: 5,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
