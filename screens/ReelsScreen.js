import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { ImgButton } from '../components/Button/Button';
import ReelsComponent from '../components/Card/ReelsComponent';
export const ReelsScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const takeVideoFromCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(video => {
      console.log(video);
    });
  };
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
            pressFunc={takeVideoFromCamera}
          />
      </View>
      <ReelsComponent />
    </View>
  );
};
