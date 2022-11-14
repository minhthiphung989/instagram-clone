import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Animated, Image, StatusBar, StyleSheet, Text, TextInput,
  View
} from 'react-native';
import { Avatar } from '../components/Avatar';
import { ImgButton } from '../components/Button/Button';
export const StoryScreen = () => {
  const [likeStory, setLikeStory] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const {name} = route.params;
  const {image} = route.params;

  const backToHome = () => {
    navigation.goBack();
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.processBar}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      <View style={styles.userBar}>
        <Avatar
          image={image}
          width={30}
          height={30}
          styleContainer={styles.avatarContainer}
        />
        <View style={styles.userName}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <ImgButton
            width={18}
            height={18}
            pressFunc={backToHome}
            style={styles.btnClose}
            img={require('../img/btn/CloseIcon.png')}
          />
        </View>
      </View>
      <Image source={image} style={styles.imgStory} />
      <View style={styles.chatBar}>
        <TextInput
          style={styles.message}
          placeholderTextColor="white"
          placeholder="Send Message"
        />
        <ImgButton
          width={24}
          height={21}
          style={styles.btnMess}
          img={require('../img/btn/MessangerStory.png')}
        />
        <ImgButton
          width={24}
          height={21}
          style={styles.btnMess}
          img={
            likeStory
              ? require('../img/btn/heartwhite.png')
              : require('../img/btn/heart-992.png')
          }
          pressFunc={() => setLikeStory(isLiked => !isLiked)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  message: {
    height: 44,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 44,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  btnMess: {
    marginRight: 10,
  },
  container: {
    backgroundColor: 'black',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  processBar: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },
  userBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
  },
  userName: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  imgStory: {position: 'absolute', width: '100%', height: 600},
  chatBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
});
