import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return(<>
    <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
    <Button title="go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
  </>);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
