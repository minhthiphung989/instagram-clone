import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Avatar} from '../components/Avatar';
import {useNavigation} from '@react-navigation/native';
import {ImgButton} from '../components/Button/Button';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useBetween } from 'use-between';
import ImagePicker from 'react-native-image-crop-picker';

export const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState('https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg');

  const handleImg = ()=>{
    navigation.navigate('ProfileScreen');
  }
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
    
  }
  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} >
        <Text style={styles.panelButtonTitle} onPress={takePhotoFromCamera}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  bs = React.createRef();
  fall = new Animated.Value(1);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <View style={styles.headerBar}>
        <ImgButton
        style={styles.backBtn}
          width={10}
          height={18}
          img={require('../img/btn/Back.png')}
          pressFunc={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.textHeader}>Edit profile</Text>
      </View>
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0))
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 86,
                width: 86,
                borderRadius: 15, 
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 86, width: 86}}
                imageStyle={{borderRadius: 100}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:86,
                    height:86
                  }}>
                  
                  <ImgButton width={30} height={30} style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor:'rgba(196, 193, 194, 0.13)'
                    }} img={require('../img/btn/CameraIconW.png')}/>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            Tonny Teo
          </Text>
        </View>

        <View style={styles.action}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              
            ]}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            placeholder="UserName"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              
            ]}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            placeholder="Description"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              
            ]}
          />
        </View>
        
        
      
        <TouchableOpacity style={styles.commandButton} onPress={handleImg
            }>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#008CBA',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#008CBA',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  headerBar: {
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