import react from 'react';
import {StyleSheet, View} from 'react-native';
import {ImgButton} from '../Button/Button';
import {SendBtn} from '../Button/SendBtn';
import {Logo} from '../Logo';
import { useIsFocused } from '@react-navigation/native';

export const Header = () => {
  const isFocused = useIsFocused();
  console.log(isFocused, 'is');
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.left}>
        <ImgButton img={require('../../img/btn/Add.png')} />
        <SendBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    borderBottom: '5px solid black',
    backgroundColor: 'white',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
});
