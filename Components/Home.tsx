// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { GoogleSignin, GoogleSigninUser } from '@react-native-google-signin/google-signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Define the navigation prop type
type HomepageProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

// Homepage component
function Homepage({ navigation }: HomepageProps) {
  // State variables to store the user's name and profile image
  const [userName, setUserName] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [email, setEmail] = useState(' ');

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Revoke access and sign out
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Additional logout logic if needed
      setUserName('');
      setEmail('');
       console.log("usename changed to:",setUserName)
       console.log(email)
        
      // Redirect to the login screen or any other desired screen
      navigation.navigate('GoogleSignIn');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Effect to fetch and set the user's name and profile image after component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the current user from Google Sign-In
        const currentUser: GoogleSigninUser | null = await GoogleSignin.getCurrentUser();

        // If the user is available, set the username and profile image
        if (currentUser) {
          setUserName(currentUser.user.name || null);
          setUserPhoto(currentUser.user.photo || null);
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    // Fetch the user's data
    fetchUserData();
  }, []);
  const Tab = createBottomTabNavigator();
  // Render the homepage content
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {userPhoto && <Image source={{ uri: userPhoto }} style={{ width: 100, height: 100, borderRadius: 50 }} />}
    {userName && ( <>
    <Text style={{ fontSize: 30, color: 'black', margin: 10, fontWeight:'bold' }}>Welcome</Text>
    <Text style={{ fontSize: 25, color: 'black', marginTop: 10, marginBottom:30 }}>{userName}!</Text>
  </>)}
  <Button title="Logout" onPress={handleLogout} />
  </View>
  );
}

export default Homepage;
