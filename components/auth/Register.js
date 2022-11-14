import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit =()=>{

  }
  return (
    <View>
      <TextInput
        placeholder="UserName"
        onChangeText={name => setName({name})}
      />
      <TextInput
        placeholder="Email"
        onChangeText={email => setEmail({email})}
      />
      <TextInput
        placeholder="Password"
        onChangeText={password => setPassword({password})}
        secureTextEntry={true}
      /><Button title='Sign Up' onPress={handleSubmit}/>
    </View>
  );
};

export default Register;
