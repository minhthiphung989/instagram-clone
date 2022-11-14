import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Noti} from '../components/Noti';
export const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22, fontWeight: '700'}}>Notification </Text>
      <View style={styles.notification}>
        <Noti />
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'white',
  },
  notification: {
    paddingTop: 10,
  },
});
