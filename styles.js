import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardsContainer: {
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    width: '40%',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20%',
  },
});
