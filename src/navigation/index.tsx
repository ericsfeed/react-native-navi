import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabs from "./BottomTabNav";
import NotifyScreen from "../screens/NotifyScreen";
import ContactStack from './ContactStack';
import SettingsScreen from '../screens/SettingsScreen';

// TODO - move to a single source for the icons
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

// navigation will use the device color theme until light dark switch is inplemented. 
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const Drawer = createDrawerNavigator()

const RootNavigator = () => {
const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator initialRouteName="Magnetic"
       screenOptions={(navigation) => ({
         drawerItemStyle: {
            borderRadius: 0,
            width: '100%',
            marginLeft: 0
         }})}>
        <Drawer.Screen name="Magnetic" component={BottomTabs} 
        options={{
          title: 'AppNameHere',
          drawerIcon: ({focused, size}) => (
             <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
        <Drawer.Screen name="Notifications" component={NotifyScreen} 
         options={{
          title: 'Notifications',
          drawerIcon: ({focused, size}) => (
             <Ionicons name="notifications-outline"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />
        <Drawer.Screen name="Contacts" component={ContactStack}
         options={{
          title: 'Contacts',
          drawerIcon: ({focused, size}) => (
             <AntDesign name="contacts"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }} 
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} 
         options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
             <AntDesign name="setting"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
             />
          ),
       }}
        />        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
