import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from '../navigation/types';
import {MainTabParamList} from '../navigation/types';

type DashboardScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainTabParamList, 'Home'>
>;

function HomeScreen() {
  const navigation = useNavigation<DashboardScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is the Home screen.</Text>
      <Button 
      style={{padding: 10}}
      title="Logout" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
}

export default HomeScreen;

