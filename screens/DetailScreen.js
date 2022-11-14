import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ImgButton } from '../components/Button/Button';
import { posts } from '../components/Card/Data/Posts';
import { Post } from '../components/Card/Post';

export const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {image} = route.params;

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
          avatar={{
            uri: 'https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg',
          }}
        />

        {posts.map(post => (
          <Post
            key={post.id}
            avatar={{uri: post.avatar}}
            userName={post.userName}
            img={post.images}
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
    backgroundColor: 'white',
    height: 44,
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
});
