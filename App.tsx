import React from 'react';
import Login from './Components/Login'
import {
  Button,
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GoogleSignIn from './Components/Signup';
import Homepage from './Components/Home';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={GoogleSignIn} />
        <Stack.Screen name="Notifications" component={Login} />
        <Stack.Screen name="home" component={Homepage} />

    </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default MyStack;
