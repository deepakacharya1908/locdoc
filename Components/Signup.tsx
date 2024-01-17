import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function GoogleSignIn() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState(' ');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '652822860289-ohbaim2q2pbfd0i79p6i3jenl9fr1qo5.apps.googleusercontent.com',
    });
  }, []);

  type RootStackParamList = {
    Homepage: undefined;
    GoogleSignIn: undefined;
  };
  type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'GoogleSignIn'>;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the current user from Google Sign-In
        const currentUser: GoogleSigninUser | null = await GoogleSignin.getCurrentUser();

        // If the user is available, set the username and profile image
        if (currentUser) {
          setUserName(currentUser.user.name || null);
          setEmail(currentUser.user.email);
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    // Fetch the user's data
    fetchUserData();
  }, []);

  useEffect(() => {
    if (email !== '' && userName !== '') {
      // Perform actions after email and userName are updated
      console.log('Username:', userName);
      console.log('Email:', email);

      // Check conditions and navigate accordingly
      if (email == 'deepakacharya1908@gmail.com') {
        navigation.navigate('Bottomtab');
      } else {
        navigation.navigate('Home');
      }
    }
  }, [email, userName, navigation]);
  
  async function onGoogleButtonPress() {
    try {
      setEmail('');
      setUserName('');
      setLoading(true);
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken, user } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log(googleCredential);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      setEmail(user.email);
      setUserName(user.name);

      // Redirect to the next screen upon successful authentication
      // navigation.navigate('Homepage');

    } catch (error) {
      console.error('Error signing in with Google:', error);
    } finally {
      setLoading(false); // Set loading to false after the sign-in process completes (success or failure)
    }
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.Activity} size={50} color={'blue'}  />
      ) : (<View style={styles.container}>
        <Image source={require('../assets/icons/logo.jpg')} style={styles.logo} />
        <Text style={styles.text}>Lock you Doc!!</Text>
        <TouchableOpacity onPress={onGoogleButtonPress} style={styles.googleButton}>
          <Image source={require('../assets/icons/google.png')} style={styles.googleImage} />
          <Text style={styles.googleButtonText}>Google Sign in</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2, // Border width
    borderColor: '#ccc', // Border color
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 2, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 2, // Shadow radius
  },
  Input_box: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
  },
  container: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333333',
    marginBottom: 20
  },
  Heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  Activity: {
    alignItems: 'center',
    marginTop:'50%',
    color:'blue'
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',  // Set your desired background color
    padding: 20,
    borderRadius: 8,
  },
  googleImage: {
    width: 24,  // Set your desired width
    height: 24,  // Set your desired height
    marginRight: 20,
    borderRadius: 25,
  },
  googleButtonText: {
    color: 'white',  // Set your desired text color
    fontSize: 16,  // Set your desired font size
  },
});

export default GoogleSignIn;
