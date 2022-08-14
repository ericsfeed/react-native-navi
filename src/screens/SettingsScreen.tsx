import React, { useState } from 'react';
import { Text, Button, View, ScrollView, Switch, StyleSheet } from 'react-native'
import { useFonts, RobotoMono_500Medium, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono'

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
      <ScrollView>
        <View style={styles.page}>

          <Text style={styles.heading1}>Settings </Text>

          <Text style={styles.heading2}>General </Text>

          <View style={styles.fieldset}>
            <Text style={styles.labels}>You are logged in. </Text>
            <Button
              title="Sign Out"
              accessibilityLabel="Sign Out of the application."
            />
          </View>

          <Text style={styles.heading2}>Appearance </Text>
          <View style={styles.fieldset}>
            <Button
              title="Display Name"
              accessibilityLabel="SChange the display name that is visible to contacts you authorize."
            />

            <Button
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

          <Text style={styles.heading2}>Security</Text>
          <View style={styles.fieldset}>
            <Button
              title="Email Address"
              accessibilityLabel="Change the display name that is visible to contacts you authorize. "
            />

            <Button
              title="Secret Key"
              accessibilityLabel="Change the secret key used to secure your account. "
            />

            <Button
              title="Password"
              accessibilityLabel="Change the password used to secure your account."
            />
          </View>
        </View>
      </ScrollView >
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  heading1: {
    fontSize: 22,
    fontFamily: 'RobotoMono_700Bold',
    padding: 4
  },
  heading2: {
    fontSize: 20,
    fontFamily: 'RobotoMono_700Bold',
    padding: 4
  },
  labels: {
    padding: 4,
    fontFamily: 'RobotoMono_500Medium'
  },
  buttons: {
    fontSize: 17,
    fontFamily: 'RobotoMono_500Medium',
    padding: 4,
  },
  fieldset: {
    flex: 1,
    padding: 10,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  page: {
    flex: 1,
    flexGrow: 1,
    gap: 10,
    backgroundColor: '#EFF0ED',
    justifyContent: 'center'
  }
});
