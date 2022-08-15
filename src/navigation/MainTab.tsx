import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainTabParamList } from './types';

import ContactStack from './ContactStack';
import ProfileTab from '../screens/ProfileTab';
import SettingsTab from '../screens/SettingsTab';
import HomeTab from '../screens/HomeTab';

import { AntDesign } from '@expo/vector-icons';

const MainTab = () => {
  const BottomTab = createBottomTabNavigator<MainTabParamList>();

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#e91e63' }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTab}
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
        component={ProfileTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsTab}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainTab;
