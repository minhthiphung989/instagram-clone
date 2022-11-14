import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { ImgButton } from '../components/Button/Button';
import SearchContent from '../components/Card/SearchContent';
export const SearchScreen = () => {
  const [image, setImage] = useState(null);
  const getData = data => {
    setImage(data);
  };
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <ImgButton
          style={styles.searchIcon}
          width={14}
          height={14}
          img={require('../img/btn/SearchIcon.png')}
        />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <SearchContent data={getData} />

        {image ? (
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(52,52,52,0.8)',
            }}>
            <StatusBar backgroundColor="#525252" barStyle="dark-content" />
            <View
              style={{
                position: 'absolute',
                top: windowHeight / 6,
                left: windowWidth / 18,
                backgroundColor: 'white',
                width: '90%',
                height: 465,
                borderRadius: 15,
                zIndex: 1,
                elevation: 50,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}>
                <Image
                  source={image}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  }}
                />
                <View style={{paddingLeft: 8}}>
                  <Text style={{fontSize: 12, fontWeight: '600'}}>
                    the_anonymous_guy
                  </Text>
                </View>
              </View>
              <Image source={image} style={{width: '100%', height: '80%'}} />
              <View
                style={{
                  justifyContent: 'space-around',
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                }}></View>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    alignContent: 'center',
    alignItems: 'center',

    // width: '100%',
    // height: '100%',
    // backgroundColor: 'white',
    // position: 'relative',
  },
  searchIcon: {
    padding: 10,
    marginLeft: 10,
  },
  textInput: {
    marginRight: 50,
    paddingRight: 50,
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // margin: 10,
    width: '100%',
  },
  photo: {
    width: '33%',
  },
});
