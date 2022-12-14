import React, { useState } from 'react';
import { Text, Button, View, ScrollView, Switch, StyleSheet, SafeAreaView } from 'react-native';
import { useFonts, RobotoMono_500Medium, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';

import Footer from '../components/Footer';

import { globalStyles } from '../styles/styles';


const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
    RobotoMono_700Bold
  });

  if (!fontsLoaded) {
    return null;
  } else
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={globalStyles.droidSafeArea} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Text style={globalStyles.heading1}>Settings </Text>
            <View style={styles.fieldset}>
              <Text style={globalStyles.heading2}>Appearance </Text>
              <Button
                style={styles.buttons}
                title="Display Name"
                accessibilityLabel="SChange the display name that is visible to contacts you authorize."
              />
              <Button
                style={styles.buttons}
                title="Icon"
                accessibilityLabel="Change the icon image that is visible to contacts you authorize."
              />
              <Text style={styles.labels}>Enable Dark Mode: </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style={styles.fieldset}>
              <Text style={globalStyles.heading2}>Security</Text>
              <Button
                style={styles.buttons}
                title="Email Address"
                accessibilityLabel="Change the display name that is visible to contacts you authorize. "
              />

              <Button
                style={styles.buttons}
                title="Secret Key"
                accessibilityLabel="Change the secret key used to secure your account. "
              />

              <Button
                style={styles.buttons}
                title="Password"
                accessibilityLabel="Change the password used to secure your account."
              />
            </View>
            <View style={styles.fieldset}>
              <Text style={globalStyles.heading2}>General </Text>
              <Text style={styles.labels}>You are logged in. </Text>
              <Button
                title="Sign Out"
                style={styles.buttons}
                accessibilityLabel="Sign Out of the application."
              />
            </View>


          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#D1E6D5'
  },
  fieldset: {
    flex: 1,
    padding: 2,
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  labels: {
    padding: 2,
    fontFamily: 'RobotoMono_500Medium'
  },
  buttons: {
    fontFamily: 'RobotoMono_500Medium',
    paddingBottom: 10
  }
});
