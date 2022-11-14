// In App.js in a new project

import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {FriendsProfileData} from '../components/Card/Data/UserData';
import {Header} from '../components/Card/Header';
import {Post} from '../components/Card/Post';
import {Stories} from '../components/Card/Stories';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <>
      <Header style={styles.container} />
      <ScrollView style={{backgroundColor: 'white'}}>
        <Stories style={styles.container} />
        {FriendsProfileData.map(post => (
          <Post
            key={post.id}
            avatar={post.profileImage}
            userName={post.name}
            img={post.profileImage}
            pressFunc={() => {
              navigation.navigate('ProfileFriendScreen', {
                accountName: post.accountName,
                profileImage: post.profileImage,
                posts: post.posts,
                followers: post.followers,
                following: post.following,
                name: post.name,
                follow: post.follow,
              });
            }}
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
