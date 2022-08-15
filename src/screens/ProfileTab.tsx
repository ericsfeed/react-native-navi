import React from 'react';

import { StyleSheet, View, ScrollView, Text, SafeAreaView } from 'react-native';

import { RobotoMono_500Medium, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { Creepster_400Regular } from '@expo-google-fonts/creepster';

import { globalStyles } from '../styles/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';

import * as Font from 'expo-font';

const myFonts = {
  RobotoMono_500Medium,
  RobotoMono_700Bold,
  Creepster_400Regular
};

export default class ProfileScreen extends React.Component {
  state = {
    fontsLoaded: false
  };

  async _loadFontsAsync() {
    await Font.loadAsync(myFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
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
