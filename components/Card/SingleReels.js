import React, {useRef, useState, memo} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {ImgButton} from '../Button/Button';
import {MoreBtn} from '../Button/MoreBtn';
import Video from 'react-native-video';

const SingleReels = ({item, index, currentIndex}) => {
  const videoRef = useRef(null);
  const [like, setLike] = useState(item.isLike);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };
  console.log(item);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          source={item.video}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 0, //edited
          padding: 10,
        }}>
        <View style={{}}>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 16}}>itscharlotty</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <ImgButton
              width={15}
              height={15}
              img={require('../../img/btn/musical-note-24.png')}
            />
            <Text style={{color: 'white', paddingBottom: 70, paddingLeft: 10}}>
              More than love
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 75,
          right: 0,
          alignItems:'center'
        }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{padding: 10}}>
          <ImgButton
            width={24}
            height={21}
            img={
              like
                ? require('../../img/btn/LikeW.png')
                : require('../../img/btn/heart-992.png')
            }
          />
          <Text style={{color: 'white'}}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <ImgButton
            width={22}
            height={23}
            img={require('../../img/btn/CommentW.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <ImgButton
            width={23}
            height={20}
            img={require('../../img/btn/MessangerW.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
        <ImgButton
            width={14}
            height={3}
            img={require('../../img/btn/MoreIconW.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            margin: 10,
          }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg',
            }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(SingleReels);
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  more: {
    width: 14,
    height: 3,
  },
});
