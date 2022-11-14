import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {StyleSheet, View, FlatList,Text, Pressable,  ScrollView, TouchableOpacity,Image} from 'react-native';
import {Avatar} from '../Avatar';
import {posts} from './Data/Posts';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export const Stories = () => {
  const [seen, setSeen]= useState(false);
  const navigation = useNavigation();
 
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../img/images/userProfile.png'),
    },
    {
      id: 0,
      name: 'Ram_Charan',
      image: require('../../img/images/profile1.jpg'),
    },
    {
      id: 0,
      name: 'Tom',
      image: require('../../img/images/profile2.jpg'),
    },
    {
      id: 0,
      name: 'The_Groot',
      image: require('../../img/images/profile3.jpg'),
    },
    ,
    {
      id: 0,
      name: 'loverland',
      image: require('../../img/images/profile4.jpg'),
    },
    ,
    {
      id: 0,
      name: 'chillhouse',
      image: require('../../img/images/profile5.jpg'),
    },
  ];

  return (
    
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>{
              navigation.navigate('StoryScreen', {
                name: data.name,
                image: data.image,
              });
            }
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <FontAwesome
                    name="plus-circle"
                    style={{
                      fontSize: 20,
                      width:20,
                      color: 'red',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={  styles.border}>
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
                  fontWeight: '400'
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
    // height:70,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#E34446',
  },
  seenStories: {
    // height:70,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
  },
  border:{
    width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
  }, 
  noneBorder:{
    width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
  
  }
});
