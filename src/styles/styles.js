import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%',
    height: '100%',
    paddingVertical: 35,
  },
  textInput: {
    width: '90%',
    backgroundColor: '#D3D3D3',
    borderRadius: 19,
    marginVertical: 10,
    paddingHorizontal: 12,
    color: 'black',
  },

  row: {
    width: '100%',
    gap: 10,
    padding: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
