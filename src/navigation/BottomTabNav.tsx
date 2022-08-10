import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import ContactStack from "./ContactStack";
import SettingsScreen from '../screens/SettingsScreen';

import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => { 
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}>

      <Tab.Screen name="Home" component={HomeScreen} 
       options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        )
      }}
       />

      <Tab.Screen name="Contacts" component={ContactStack} 
      options={{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="contacts" size={size} color={color} />
        )
      }}
       />

      <Tab.Screen name="Settings" component={SettingsScreen} 

options={{
  tabBarLabel: 'Settings',
  tabBarIcon: ({ color, size }) => (
    <AntDesign name="setting" size={size} color={color} />
  )
}}


      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
