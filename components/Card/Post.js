import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {Avatar} from '../Avatar';
import {MoreBtn} from '../Button/MoreBtn';
import {ImgButton} from '../Button/Button';

export const Post = ({avatar, userName, img, pressFunc}) => {
  const [liked, setLiked] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={pressFunc} style={styles.user}>
          <Avatar width={32} height={32} image={avatar} />
          <Text style={styles.text}>{userName}</Text>
        </Pressable>
        <MoreBtn style={styles.more} />
      </View>
      <Image source={img} style={styles.image} />

      <View style={styles.header}>
        <View style={styles.action}>
          <ImgButton
            width={24}
            height={21}
            img={
              liked
                ? require('../../img/btn/Like.png')
                : require('../../img/btn/heart-992.png')
            }
            pressFunc={() => setLiked(isLiked => !isLiked)}
            style={styles.btn}
          />
          <Pressable>
            <ImgButton
              width={22}
              height={23}
              img={require('../../img/btn/Comment.png')}
              style={styles.btn}
            />
          </Pressable>

          <ImgButton
            width={23}
            height={20}
            img={require('../../img/btn/Messanger.png')}
            style={styles.btn}
          />
        </View>
        <ImgButton
          width={21}
          height={24}
          img={require('../../img/btn/Save.png')}
          style={styles.save}
        />
      </View>
      <Text style={styles.like}>
        Liked by <Text style={{fontWeight: 'bold'}}>craig_love</Text> and{' '}
        <Text style={{fontWeight: 'bold'}}>44,686 others</Text>
      </Text>

      <Text style={styles.like}>
        <Text style={{fontWeight: 'bold'}}>{userName}</Text> and The game in
        Japan was amazing and I want to share some photo
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    paddingLeft: 10,
  },
  more: {
    width: 90,
    height: 90,
  },
  image: {
    width: 390,
    height: 375,
  },
  action: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
  },
  like: {
    paddingTop: 10,
  },
  save: {
    marginTop: 10,
  },
  btn: {
    marginRight: 10,
  },
});
