import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: 36,
    height: 46,
    marginRight: 10,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export const IconNavBar = ({...props}) => {
  const imgStyle = [
    styles.img,
    props.width && {width: props.width},
    props.radius && {borderRadius: 8},
  ];

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={imgStyle}
        source={props.icon === 1 ? props.icon : {uri: props.icon}}
      />
      {props.title && <Text style={styles.text}>{props.title}</Text>}
    </View>
  );
};
