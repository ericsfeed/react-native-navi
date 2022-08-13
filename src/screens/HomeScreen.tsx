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
    <View style={{flex: 1, backgroundColor: '#E0C1D2' , alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is the Home screen.</Text>
      <Text>Whew! So far so good. .</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
}

export default HomeScreen;

