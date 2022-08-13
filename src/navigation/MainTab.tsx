import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainTabParamList } from './types';

import ContactStack from './ContactStack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';

import { AntDesign } from '@expo/vector-icons';

const MainTab = () => {
  const BottomTab = createBottomTabNavigator<MainTabParamList>();

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#e91e63' }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name="Contacts"
        component={ContactStack}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => <AntDesign name="contacts" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainTab;
