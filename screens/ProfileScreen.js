import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from '../components/Avatar';
import {ImgButton} from '../components/Button/Button';
import {UserInfo} from '../components/Card/UserInfo';
import {Photos} from '../components/Photos';
export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>itscharlotty</Text>
        <Pressable>
          <ImgButton
            width={21}
            height={18}
            img={require('../img/btn/Menu.png')}
          />
        </Pressable>
      </View>
      <View style={styles.info}>
        <Avatar
          image={{
            uri: 'https://i.pinimg.com/originals/b6/48/62/b648623f2cc32117d2fe50bbe33e11ba.jpg',
          }}
          width={86}
          height={86}
          styleContainer={styles.avatar}
        />
        <UserInfo />
      </View>

      <View>
        <Text style={{fontWeight: '700'}}>Jacob West</Text>
        <Text>Digital goodies designer @pixsellz Everything is designed.</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('EditProfileScreen')}
        style={styles.editBtn}>
        <Text style={{color: 'black'}}>Edit profile</Text>
      </Pressable>
      {/* <Stories/> */}
      <ScrollView>
        <View style={styles.photoContainer}>
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
          <Photos width={124} height={124} stylePhoto={styles.photo} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#FAFAFA',
  },
  editBtn: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
  },
  avatar: {
    paddingTop: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    width: '100%',
    marginTop: 20,
    border: '1px solid rgba(60, 60, 67, 0.18)',
  },
  photo: {
    width: '33.33%',
    marginBottom: 5,
  },
});
