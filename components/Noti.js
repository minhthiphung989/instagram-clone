import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { Avatar } from './Avatar';
import { FriendsProfileData } from './Card/Data/UserData';
import { Photos } from './Photos';
export const Noti = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: 'bold'}}>This Week</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {FriendsProfileData.slice(0, 3).map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('ProfileFriendScreen', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                  })
                }
                key={index}>
                <Text>{data.name},</Text>
              </TouchableOpacity>
            );
          })}
          <Text> started following you</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'space-between',
          }}>
          {FriendsProfileData.slice(0, 1).map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('ProfileFriendScreen', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                  })
                }
                key={index}
                style={{flexDirection: 'row'}}>
                <Avatar image={data.profileImage} width={44} height={44} />
                <Text style={{fontWeight: 'bold', paddingTop: 10}}>
                  {data.name}
                </Text>
                <Text style={{paddingTop: 10}}> liked your post</Text>
              </TouchableOpacity>
            );
          })}

          <Photos width={44} height={44} />
        </View>
        <Text style={{fontWeight: 'bold'}}>Earlier</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          return (
            <View key={index} style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('ProfileFriendScreen', {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '64%',
                  }}>
                  <Image
                    source={data.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{data.name}</Text> who
                    you might know, is on instagram
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={{width: follow ? 72 : 68}}>
                  <View
                    style={{
                      width: '100%',
                      height: 30,
                      borderRadius: 5,
                      backgroundColor: follow ? null : '#3493D9',
                      borderWidth: follow ? 1 : 0,
                      borderColor: follow ? '#DEDEDE' : null,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: follow ? 'black' : 'white'}}>
                      {follow ? 'Following' : 'Follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          Suggestions for you
        </Text>
        {FriendsProfileData.slice(6.12).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          const [close, setClose] = useState(false);
          return (
            <View key={index}>
              {close ? null : (
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.push('ProfileFriendScreen', {
                          name: data.name,
                          profileImage: data.profileImage,
                          follow: follow,
                          post: data.posts,
                          followers: data.followers,
                          following: data.following,
                        })
                      }
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '64%',
                      }}>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                      <View style={{width: '100%'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {data.name}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {data.accountName}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Sugggested for you
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {follow ? (
                      <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{
                          width: follow ? 90 : 68,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: follow ? null : '#3493D9',
                            borderWidth: follow ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: follow ? 'black' : 'white'}}>
                            {follow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setFollow(!follow)}
                          style={{
                            width: follow ? 90 : 68,
                          }}>
                          <View
                            style={{
                              width: '100%',
                              height: 30,
                              borderRadius: 5,
                              backgroundColor: follow ? null : '#3493D9',
                              borderWidth: follow ? 1 : 0,
                              borderColor: '#DEDEDE',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: follow ? 'black' : 'white'}}>
                              {follow ? 'Following' : 'Follow'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setClose(true)}
                          style={{paddingHorizontal: 10}}>
                          <Text>x</Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <View style={{padding: 20}}>
          <Text style={{color: '#3493D9'}}>See all Suggetions</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
