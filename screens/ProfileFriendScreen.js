import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '../components/Avatar';
import { ImgButton } from '../components/Button/Button';
import { Photos } from '../components/Photos';
export const ProfileFriendScreen = () => {
  const route = useRoute();
  const {follow} = route.params;
  const {accountName} = route.params;
  const {profileImage} = route.params;
  const {followers} = route.params;
  const {following} = route.params;
  const {name} = route.params;
  const {posts} = route.params;
  const [isFollow, setIsFollow] = useState(follow);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImgButton
          style={styles.backBtn}
          width={10}
          height={18}
          img={require('../img/btn/Back.png')}
          pressFunc={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.textHeader}>{name}</Text>
      </View>
      <View style={styles.info}>
        <Avatar
          image={profileImage}
          width={86}
          height={86}
          styleContainer={styles.avatar}
        />
        <View style={styles.containerInfo}>
          <View style={styles.info}>
            <View style={styles.col}>
              <Text
                style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>
                {posts}
              </Text>
              <Text style={{textAlign: 'center'}}>Posts</Text>
            </View>
            <View style={styles.col}>
              <Text
                style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>
                {followers}
              </Text>
              <Text style={{textAlign: 'center'}}>Followers</Text>
            </View>
            <View style={styles.col}>
              <Text
                style={{textAlign: 'center', fontSize: 16, fontWeight: '600'}}>
                {following}
              </Text>
              <Text style={{textAlign: 'center'}}>Following</Text>
            </View>
          </View>
          <Pressable
            onPress={() => setIsFollow(!isFollow)}
            style={{
              backgroundColor: isFollow ? 'white' : '#3493D9',
              padding: 10,
              marginHorizontal: 40,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: isFollow ? 'black' : 'white',
                textAlign: 'center',
              }}>
              {isFollow ? 'Following' : 'Follow'}
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={{fontWeight: '700'}}>{accountName}</Text>
        <Text>Digital goodies designer @pixsellz Everything is designed.</Text>
      </View>

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
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 44,
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
  avatar: {
    paddingTop: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  col: {
    flex: 1,
  },
  containerInfo: {
    flex: 1,
  },
});
