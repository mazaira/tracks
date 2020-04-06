import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthcContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthcContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign up for Tracker</Text>
      </Spacer>
        <Input
          label='Email'
          value={email}
          onChangeText= {setEmail}
          autoCapitalize='none'
          autoCorrect={false}
        />
      <Spacer />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button title='Sign up' onPress={ () => signup({ email, password }) }/>
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;
