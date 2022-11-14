import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

export const Logo = () => {
  return (
    <Pressable>
      <Image style={styles.image} source={require('../img/btn/InstagramLogo.png')} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
    image: {
      width: 130,
      height: 35,
    },
  });