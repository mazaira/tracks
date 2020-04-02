import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const StackAuth = createStackNavigator();
const StackTracks = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Auth() {
  return (
    <StackAuth.Navigator>
      <StackAuth.Screen name="Signup" component={SignupScreen} />
      <StackAuth.Screen name="Signin" component={SigninScreen} />
    </StackAuth.Navigator>
  );
}

function Tracks() {
  return (
    <StackTracks.Navigator>
      <StackTracks.Screen name="TrackList" component={TrackListScreen} />
      <StackTracks.Screen name="TrackDetail" component={TrackDetailScreen} />
    </StackTracks.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { false ? (
          <>
            <Tab.Screen name="Account" component={AccountScreen} />
            <Tab.Screen name="Tracks" component={Tracks} />
            <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          </>
        ) : (
            <Stack.Screen name="Auth" component={Auth} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />
};
