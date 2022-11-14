// In App.js in a new project

import * as React from 'react';
import {
  ScrollView, StyleSheet
} from 'react-native';
import { posts } from '../components/Card/Data/Posts';
import { Header } from '../components/Card/Header';
import { Post } from '../components/Card/Post';
import { Stories } from '../components/Card/Stories';

export function HomeScreen() {
  return (
    <>
      <Header style={styles.container} />
      <ScrollView style={{backgroundColor: 'white'}}>
        <Stories style={styles.container} />
        {posts.map(post => (
          <Post
            key={post.id}
            avatar={{uri:post.avatar}}
            userName={post.userName}
            img={post.images}
            // style={styles.container}
          />
        ))}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  scrollView: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 42,
  },
});
