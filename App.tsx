import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GoogleSignIn from './Components/Signup';
import Homepage from './Components/Home';
import Admin from './Components/Admin';
import BottomTabNavigator from './Components/BottomNav';
import QR from './Components/QR';
import Doctor from './Components/Doctor';
import Hospitals from './Components/Hospitals';
import Superuser from './Components/Super/SuperuserDoc';
import BottomTabNavigatorAdmin from './Components/Super/BottomNavAdmin';
import Homeanalysis from './Components/Super/HomeAnalysis';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="GoogleSignIn" options={{headerTitle: 'Loc Doc', headerShown: true}} component={GoogleSignIn} />
        <Stack.Screen name="Home" options={{headerTitle: 'Test', headerShown: false}} component={BottomTabNavigator} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Admin" component={Admin}/>
        <Stack.Screen name="QR" component={QR}/>
        <Stack.Screen name="Doctor" component={Doctor}/>
        <Stack.Screen name="Hospitals" component={Hospitals}/>
        <Stack.Screen name="Bottomtab" options={{ headerShown: false}} component={BottomTabNavigatorAdmin}/>
        <Stack.Screen name="Homeanalysis" component={Homeanalysis}/>


      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default MyStack;
