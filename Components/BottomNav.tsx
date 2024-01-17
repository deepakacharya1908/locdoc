// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Dashboard from './Dashboard';
import { Image, View } from 'react-native';
import Homepage from './Home';
import FAQ from './FAQ';
import Whereto from './whereto';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('../assets/icons/hospital.gif')}
                                style={{ width: 30, height: 30, }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Search" component={Whereto} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/icons/doctor.gif')}
                            style={{ width: 30, height: 30, }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'blue',
                                    borderRadius: 50,  // Set the border radius for a circle
                                    padding: 20 ,
                                    marginBottom:25,  // Set additional padding for a larger circle
                                }}
                            >
                                <Image
                                    source={require('../assets/icons/qr-code.gif')}
                                    style={{ width: 40, height: 40, }}
                                />
                            </View>
                        </View>
                    ),
                    tabBarLabel: '',
                }}
            />

            <Tab.Screen name="FAQ" component={FAQ} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/icons/setting.gif')}
                            style={{ width: 30, height: 30, }}
                        />
                    </View>
                ),
            }} />
            <Tab.Screen name="Settings" component={Homepage} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image
                            source={require('../assets/icons/setting.gif')}
                            style={{ width: 30, height: 30, }}
                        />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
