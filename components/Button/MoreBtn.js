import React from 'react';
import {Pressable,Button,Text, Image,StyleSheet} from 'react-native';

export const MoreBtn = () => {
  return (
    <Pressable>
      {/* <Text style={styles.text}>...</Text> */}
      <Image
        source={require('../../img/btn/MoreIcon.png')}
        style={{width:14, height:3}}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {fontSize:30,bottom:15},
  
});
