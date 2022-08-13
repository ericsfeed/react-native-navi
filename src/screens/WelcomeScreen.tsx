import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/types'; 

import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

import { Creepster_400Regular } from "@expo-google-fonts/creepster";


type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;


const WelcomeScreen = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const navigation = useNavigation<welcomeScreenProp>();

  let [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold,
    Creepster_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 24, paddingBottom: 40, fontFamily: "RobotoMono_500Medium" }]}>
         You are here.
         </Text>
        <Text
          style={[ styles.text,{ fontSize: 36,  paddingBottom: 40, fontFamily: "Creepster_400Regular" } ]}>
          The Horror
          </Text>
          <Text style={[styles.text, { fontSize: 28, paddingBottom: 40, fontFamily: "RobotoMono_500Medium" }]}>
         Who knows what will happen next? 
        </Text>
        <Button title="Enter" onPress={() => navigation.navigate('Main')} />
    </View>
  );
  }
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    paddingVertical: 10,
  },
});

