import type { StackNavigationProp } from '@react-navigation/stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';


export type ContactStackNavigatorParamList = {
  Contacts: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
};

export type DrawerNavigatorParamList = {
  Home : undefined;
  Notifications: undefined;
  Contacts: undefined;
  Settings: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Contacts: ContactStackNavigatorParamList;
  Settings: undefined;
};

export type ContactScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ContactStackNavigatorParamList, 'Contacts'>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Settings'>
>;

export type DetailsScreenRouteProp = RouteProp<
  ContactStackNavigatorParamList,
  'Details'
>;