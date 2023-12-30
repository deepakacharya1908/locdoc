/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Import Firebase
import { initializeApp } from '@react-native-firebase/app';

import firebaseConfig from './android/app/google-services.json'

// Initialize Firebase
initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);

