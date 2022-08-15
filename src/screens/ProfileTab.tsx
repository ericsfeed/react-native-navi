import React from 'react';

import { StyleSheet, View, ScrollView, Text, SafeAreaView } from 'react-native';

import {
  useFonts,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
  Creepster_400Regular
} from '@expo-google-fonts/dev';


import { globalStyles } from '../styles/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProfileScreen() {

  const [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
    RobotoMono_700Bold,
    Creepster_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView style={globalStyles.droidSafeArea} contentContainerStyle={{ flex: 10 }}>
          <Text style={globalStyles.heading1}>Profile</Text>
          <View style={styles.container}>
            <Text style={styles.copy}>This is the Profile screen.</Text>
            <Text style={[styles.copy, { fontSize: 36, fontFamily: 'Creepster_400Regular' }]}>
              I'm So Sorry
            </Text>
            <Text style={styles.copy}>Maybe next time things will go better.</Text>
          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F2EFC9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  copy: {
    color: 'black',
    fontSize: 18,
    paddingVertical: 10,
    fontFamily: 'RobotoMono_500Medium'
  }
});
