import {StyleSheet} from 'react-native';
import {blue, green, purple} from './color';

export const detailsStyles = StyleSheet.create({
  Human: {
    backgroundColor: blue,
  },
  Alien: {
    backgroundColor: green,
  },
  Mytological: {
    backgroundColor: purple,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  containerInfo: {
    width: '100%',
    height: '35%',
    marginTop: '5%',
    marginLeft: '5%',
    alignItems: 'flex-start',
  },
  containerDescription: {
    backgroundColor: 'white',
    width: '100%',
    height: '65%',
    borderTopEndRadius: 34,
    borderTopLeftRadius: 34,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
});
