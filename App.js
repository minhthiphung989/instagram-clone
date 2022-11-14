/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';
import { HomeScreen } from './screens/Home';
import { NotificationScreen } from './screens/NotificationScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SearchScreen } from './screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StoryScreen } from './screens/StoryScreen';
import {DetailScreen} from './screens/DetailScreen';
import { ReelsScreen } from './screens/ReelsScreen';
import {EditProfileScreen} from './screens/EditProfileScreen'
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
// import { firebase } from '@react-native-firebase/auth';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import * as firebase from '@react-native-firebase/app'

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJGiGXrlCYAqBmK6M7_khH3CkI2hV7Fcg",
  authDomain: "instagram-clone-reactnat-66d38.firebaseapp.com",
  projectId: "instagram-clone-reactnat-66d38",
  storageBucket: "instagram-clone-reactnat-66d38.appspot.com",
  messagingSenderId: "568516312666",
  appId: "1:568516312666:web:c2076a4e5ac830be276263",
  measurementId: "G-YWEEP127WM"
};
// if(firebase){
//   firebase.initializeApp(firebaseConfig)
// }


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MyStack = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.tabBarIcon}
            source={
              focused
                ? require('./img/btn/HomeA.png')
                : require('./img/btn/Home.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        tabBarLabel: () => {},
        tabBarIcon: ({focused}) => (
          <Image
          style={styles.tabBarIcon}
          source={
            focused
              ? require('./img/btn/SearchA.png')
              : require('./img/btn/Search.png')
          }
        />
        ),
      }}
    />
    <Tab.Screen
      name="ReelsScreen"
      component={ReelsScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.tabBarIcon}
            source={
              focused
                ? require('./img/btn/Reels.png')
                : require('./img/btn/Reels.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="NotificationScreen"
      component={NotificationScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <Image
            style={styles.likeTab}
            source={
              focused
                ? require('./img/btn/LikeA.png')
                : require('./img/btn/Like.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: () => (
          <Image
            style={styles.avatarTab}
            source={
              {uri : 'https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg'}
            }
          />
          
        ),
      }}
    />
  </Tab.Navigator>
  )
}
const App = () => {
  return (
    
      <NavigationContainer>
     <Stack.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }} 
    // initialRouteName="Landing"
    >
      {/* <Stack.Screen name='Landing' component={Landing}/> */}
      {/* <Stack.Screen name='Register' component={Register}/> */}
        <Stack.Screen name="HomeScreen" component={MyStack} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
};

export default App;

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 24,
    height: 24,
  },
  likeTab: {
    width: 24,
    height:21
  },
  avatarTab:{
    borderRadius:100,
    width: 23,
    height:23
  }

});
