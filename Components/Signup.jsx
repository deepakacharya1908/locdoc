import React from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '652822860289-ohbaim2q2pbfd0i79p6i3jenl9fr1qo5.apps.googleusercontent.com',
});
async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
function GoogleSignIn() {
  return (
   <View>
   <Text>Hello World!!</Text>
  <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
   </View>
  );
}
export default GoogleSignIn;