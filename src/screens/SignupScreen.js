import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return(<>
    <Text style={{ fontSize: 48 }}>SignupScreen</Text>
    <Button title="go to Sign in" onPress={ () => navigation.navigate('Signin')} />

    <Button title="go to Main flow" onPress={ () => navigation.navigate('Home')} />
  </>);
}

const styles = StyleSheet.create({});

export default SignupScreen;
