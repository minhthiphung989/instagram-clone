import React from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ImgButton} from '../components/Button/Button';
import SingleReels from '../components/Card/SingleReels';
import {videoData} from '../components/Card/Data/videoData';
import ReelsComponent from '../components/Card/ReelsComponent';
export const ReelsScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 15,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <ImgButton
          width={24}
          height={22}
          img={require('../img/btn/CameraIconW.png')}
        />
      </View>
        <ReelsComponent/>
    </View>
  );
};
