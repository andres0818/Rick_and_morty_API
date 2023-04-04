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
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  },

  containerInfo: {
    width: '100%',
    height: '35%',
    marginTop: '5%',
    marginLeft: '5%',
    alignItems: 'flex-start',
  },
  containerDescription: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '65%',
    borderTopEndRadius: 34,
    borderTopLeftRadius: 34,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
    color: 'black',
    backgroundColor: '#7f7f7f6e',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  imgContainer: {
    position: 'absolute',
    display: 'flex',
    top: -100,
    zIndex: 4,
    borderRadius: 15,
    elevation: 15,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  description: {
    flexDirection: 'column',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    height: '15%',
    marginHorizontal: '5%',
    marginBottom: '5%',
    borderRadius: 10,
    top: 35,
    paddingVertical: 4,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0',
  },
  descriptionTitle: {
    width: '50%',
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    overflow: 'hidden',
  },
  descriptionSubTitle: {
    width: '50%',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#fffff94b',
    alignSelf: 'flex-start',
    borderRadius: 10,
    textAlign: 'center',
    padding: 4,
    marginRight: 10,
    color: '#000000',
    overflow: 'hidden',
  },
});
