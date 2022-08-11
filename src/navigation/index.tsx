import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from "./BottomTabNav";
import NotifyScreen from "../screens/NotifyScreen";
import ContactStack from './ContactStack';
import SettingsScreen from '../screens/SettingsScreen';

import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';


const Drawer = createDrawerNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Magnetic"
       screenOptions={(navigation) => ({
         drawerItemStyle: {
            borderRadius: 0,
            width: '100%',
            marginLeft: 0
         }
        }
      )
      }  
      >
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
