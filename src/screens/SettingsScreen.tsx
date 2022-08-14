import React, { useState } from 'react';
import { Text, Button, View, ScrollView, Switch, StyleSheet } from 'react-native';
import { useFonts, RobotoMono_500Medium, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
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
      <ScrollView style={globalStyles.droidSafeArea} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.page}>
          <Text style={globalStyles.heading1}>Settings </Text>
          <Text style={globalStyles.heading2}>General </Text>
          <View style={styles.fieldset}>
            <Text style={styles.labels}>You are logged in. </Text>
            <Button
              title="Sign Out"
              style={styles.buttons}
              accessibilityLabel="Sign Out of the application."
            />
          </View>
          <Text style={globalStyles.heading2}>Appearance </Text>
          <View style={styles.fieldset}>
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

          <Text style={globalStyles.heading2}>Security</Text>
          <View style={styles.fieldset}>
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
        </View>
      </ScrollView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  labels: {
    padding: 4,
    fontFamily: 'RobotoMono_500Medium'
  },
  buttons: {
    fontSize: 17,
    fontFamily: 'RobotoMono_500Medium',
    padding: 4
  },
  fieldset: {
    flex: 1,
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10
  },
  page: {
    flex: 1,
    gap: 10,
    backgroundColor: '#D1E6D5'
  }
});
