import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SuperuserDoc from './SuperuserDoc';
import SuperuserHosp from './SuperuserHosp';
import Homepage from '../Home';
import Homeanalysis from './HomeAnalysis';

const Tab = createBottomTabNavigator();
const { Value } = Animated;

const BottomTabNavigatorAdmin = () => {
  const animatedValue = new Value(0);

  const handleTabPress = (index) => {
    // Your logic for handling tab press
    console.log(`Tab ${index} pressed`);
  };

  const renderAnimatedIcon = (source, focused, index) => {
    const opacity = focused ? 1 : 0.5;
    const scale = focused ? 1.2 : 1;

    return (
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <Image
          source={source}
          style={{ width: 30, height: 30 }}
        />
      </Animated.View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homescreen"
        component={Homeanalysis}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => handleTabPress(0)}>
              {renderAnimatedIcon(require('../../assets/icons/hospital.gif'), focused, 0)}
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Doc screen"
        component={SuperuserDoc}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => handleTabPress(1)}>
              {renderAnimatedIcon(require('../../assets/icons/hospital.gif'), focused, 1)}
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Hospital screen" component={SuperuserHosp} options={{
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity onPress={() => handleTabPress(2)}>
            {renderAnimatedIcon(require('../../assets/icons/doctor.gif'), focused, 2)}
          </TouchableOpacity>
        ),
      }} />
      <Tab.Screen name="Settings" component={Homepage} options={{
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity onPress={() => handleTabPress(3)}>
            {renderAnimatedIcon(require('../../assets/icons/setting.gif'), focused, 3)}
          </TouchableOpacity>
        ),
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigatorAdmin;
