import React from 'react';
import {Pressable,Button, Image,StyleSheet} from 'react-native';

export const SaveBtn = () => {
  return (
    <Pressable>
      <Image
        source={require('../../img/btn/Save.png')}
        style={styles.image}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 21,
    height: 24,
    marginTop: 10
  },
});
