import type { StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { CompositeNavigationProp, RouteProp, } from '@react-navigation/native';


export type RootStackParamList = { 
  Welcome: undefined; 
  Main: undefined; };

export type MainTabParamList = { 
  Home: undefined;
  Notifications: undefined; 
  Contacts: undefined; 
  Profile: undefined; 
  Settings: undefined; 
};

export type ContactStackNavigatorParamList = {
  Contacts: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
};


export type ContactScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ContactStackNavigatorParamList, 'Contacts'>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Settings'>
>;

