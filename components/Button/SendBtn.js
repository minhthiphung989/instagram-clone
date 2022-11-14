import React from 'react';
import {Pressable,Button, Image,StyleSheet} from 'react-native';

export const SendBtn = ({style}) => {
  return (
    <Pressable>
      <Image
        source={require('../../img/btn/Messanger.png')}
        style={[styles.image, style]}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 28,
    height: 25,
  },
});
