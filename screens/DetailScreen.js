import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {ImgButton} from '../components/Button/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Post } from '../components/Card/Post';
import { posts } from '../components/Card/Data/Posts';

export const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {image} = route.params;
 
  console.log(image, "detail");
  return (
    <View>
      
      <View style={styles.header}>
        <ImgButton
        style={styles.backBtn}
          width={10}
          height={18}
          img={require('../img/btn/Back.png')}
          pressFunc={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.textHeader}>Discover</Text>
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
      <Post
            userName={'itscharlotty'}
            img={image}
            avatar={'https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg'}
            // style={styles.container}
          />
          
        {posts.map(post => (
          <Post
            key={post.id}
            avatar={post.avatar}
            userName={post.userName}
            image={post.img}
            // style={styles.container}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor:'white',
    height:44,
    alignItems:'center'
  },
  textHeader: {
    fontWeight: '600',
    fontSize: 16,
    flex:1,
    textAlign:'center',
    color:'black'
  },
  
});
