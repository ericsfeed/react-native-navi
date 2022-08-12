import React, { useState } from "react";
import { Text, Button, View, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.labels}>You are logged in. </Text>
      <Button
        style={styles.buttons}
        color="#841584"
        title="Sign Out"
        accessibilityLabel="Sign out of the current session."
      />
      <Text style={styles.fields}>Enable Dark Mode: </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labels: {
    fontSize: 18,
    padding: 4,
  },
  buttons: {
    fontSize: 18,
    alignSelf: 'normal'
  },
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#EFF0ED',
  },
});

export default SettingsScreen;
