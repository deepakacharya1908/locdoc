import React, { useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function GoogleSignIn() {
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '652822860289-ohbaim2q2pbfd0i79p6i3jenl9fr1qo5.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log(googleCredential);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);

      // Redirect to the next screen upon successful authentication
      navigation.navigate('Homepage');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='username' style={styles.Input_box}></TextInput>
      <TextInput placeholder='password' secureTextEntry={true} style={styles.Input_box}></TextInput>
      <Button title='Sign Up'></Button>

      <Text style={styles.Heading}>OR</Text>
      <Button title='Google Sign in' onPress={onGoogleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default GoogleSignIn;
