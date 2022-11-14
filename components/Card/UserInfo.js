import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:'600'}}>123</Text>
        <Text style={{textAlign:'center'}}>Posts</Text>
      </View>
      <View style={styles.col}>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:'600'}}>1234</Text>
        <Text style={{textAlign:'center'}}>Followers</Text>
      </View>
      <View style={styles.col}>
        <Text style={{textAlign:'center', fontSize:16, fontWeight:'600'}}>123</Text>
        <Text style={{textAlign:'center'}}>Following</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  col: {
    flex: 1,
  },
});
