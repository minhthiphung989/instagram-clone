import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { storyInfo } from './Data/StoryData';
export const Stories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('StoryScreen', {
                name: data.name,
                image: data.image,
              });
            }}>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              <View style={styles.border}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: '#E34446',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  opacity: data.id == 0 ? 1 : 0.5,
                  fontWeight: '400',
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 5,
  },
  avatar: {
    color: 'red',
  },
  stories: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#E34446',
  },
  seenStories: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
  },
  border: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noneBorder: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
