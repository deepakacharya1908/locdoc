import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, Modal } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera'
import { PERMISSIONS, request } from 'react-native-permissions';

function Dashboard() {
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const result = await request(PERMISSIONS.IOS.CAMERA);
        if (result === 'granted') {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (error) {
        console.error('Error requesting camera permission:', error);
      }
    };

    requestCameraPermission();
  }, []);

  const [scannedData, setScannedData] = useState(null);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleQRCodeRead = ({ data }) => {
    // Display an alert with the scanned data
    setScannedData(data);
    navigation.navigate('QR',{ scannedData: data });
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={handleQRCodeRead}
      />
      <View style={styles.frame} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  frame: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    position: 'absolute',
    top: '30%', // Adjust the top position based on your design
    bottom: '35%', // Adjust the bottom position based on your design
    left: '20%', // Adjust the left position based on your design
    right: '20%', // Adjust the right position based on your design
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  scannedDataText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default Dashboard


