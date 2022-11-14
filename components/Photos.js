import React from 'react';
import { Image, Pressable } from 'react-native';
export const Photos = ({width, height, stylePhoto, img}) => {
  return (
    <Pressable style={stylePhoto}>
      <Image
        style={{width: width, height: height}}
        source={{
          uri: 'https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg',
        }}
      />
    </Pressable>
  );
};
