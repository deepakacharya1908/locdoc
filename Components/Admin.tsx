import { Button, StyleSheet,Text,View } from "react-native";
import React, { useEffect, useState } from "react";

import { GoogleSignin,GoogleSigninUser } from "@react-native-google-signin/google-signin";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

type HomepageProps = {
    navigation: NativeStackNavigationProp<ParamListBase>;
  };
  // Homepage component
function Admin({ navigation }: HomepageProps) {
    const [userName, setUserName] = useState<string | null>(null);
    const [userPhoto, setUserPhoto] = useState<string | null>(null);
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
    const handleLogout = async () => {
        console.warn
        try {
          // Revoke access and sign out
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setUserName('');
          console.log("username is",userName)
          // Additional logout logic if needed
          // Redirect to the login screen or any other desired screen
          navigation.navigate('GoogleSignIn');
        } catch (error) {
          console.error('Error logging out:', error);
        }
      }
    return(
        <View>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis nemo sapiente consequuntur porro temporibus eius ut sequi maxime, tempore quas, aperiam eos accusantium eligendi harum assumenda laborum quaerat recusandae magnam? In quae maxime accusantium quo numquam ad, accusamus nulla dolor amet quod. Reiciendis magni provident minima consequatur ex ipsum nemo quos, voluptatum itaque inventore dignissimos deserunt aut eos qui odit, hic eum magnam quo velit aliquam numquam, a soluta! Culpa ullam exercitationem inventore facilis dolores laudantium odio quos totam, tempora pariatur voluptatibus itaque nobis minima veritatis non numquam necessitatibus eius quibusdam amet at! Deserunt aut expedita perferendis officia veritatis!</Text>
            <Button title="Logout" onPress={handleLogout}/>
        </View>
    )
}

export default Admin

const styles = StyleSheet.create({

})