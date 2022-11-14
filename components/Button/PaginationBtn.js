import React from 'react';
import {Pressable,Button, Image,StyleSheet} from 'react-native';

export const PaginationBtn = () => {
  return (
    <Pressable>
      <Image
        source={require('../../img/btn/Pagination.png')}
        style={styles.image}
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
