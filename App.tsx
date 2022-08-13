import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab from './src/navigation/MainTab';
import WelcomeScreen from './src/screens/WelcomeScreen';

import { RootStackParamList } from './src/navigation/types';

// dependencies
import 'react-native-gesture-handler';
import 'react-native-reanimated';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
