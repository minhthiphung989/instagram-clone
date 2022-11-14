import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();
  const handle = ()=>{
    navigation.navigate('StoryScreen');
    setSeen(isLiked => !isLiked);
    
  }
  return (
    <View>
      <Text>Landing</Text>
      <Button title='Register' onPress={()=>navigation.navigate("Register")}/>
      <Button title='Login' onPress={()=>navigation.navigate("Login")}/>
    </View>
  )
}

export default Landing