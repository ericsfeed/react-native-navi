import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { globalStyles } from '../styles/styles';

import { RootStackParamList } from '../navigation/types';
import { MainTabParamList } from '../navigation/types';

type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainTabParamList, 'Home'>>;

import { useFonts, RobotoMono_500Medium, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';

import { Creepster_400Regular } from '@expo-google-fonts/creepster';

function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();

  const [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
    RobotoMono_700Bold,
    Creepster_400Regular
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (

      <ScrollView
        style={globalStyles.droidSafeArea}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={globalStyles.heading1}>Home </Text>
        <View style={styles.container}>
          <Text style={styles.copy}> This is the Home screen.</Text>
          <Text style={styles.copy}>Whew! So far so good. </Text>
          <Button title="Sign Out" onPress={() => navigation.navigate('Welcome')} />
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0C1D2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  copy: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
    fontFamily: 'RobotoMono_500Medium'
  }
});
