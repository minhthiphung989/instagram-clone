import React from 'react';
import {Pressable, Image, StyleSheet, Text, View} from 'react-native';

export const Avatar = ({
  width,
  height,
  userName,
  image,
  text,
  styleStories,
  styleContainer,
  pressFunc
}) => {
  return (
    <Pressable style={styleContainer} onPress={pressFunc}>
      <View style={styleStories}>
        <Image
          source={
            image
          }
          style={{width: width, height: height, borderRadius: 100}}
        />
      </View>

      <Text style={{width: text}} numberOfLines={1}>
        {userName}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  image: {
    width: 50,
    height: 50,
  },
});
