import { StyleSheet, View, Text } from 'react-native';

import { useFonts, RobotoMono_500Medium, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';

import { Creepster_400Regular } from '@expo-google-fonts/creepster';

const ProfileScreen = () => {
  const [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
    RobotoMono_700Bold,
    Creepster_400Regular
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.copy}>This is the Profile screen.</Text>
        <Text style={[styles.copy, { fontSize: 36, fontFamily: 'Creepster_400Regular' }]}>
          I'm So Sorry
        </Text>
        <Text style={styles.copy}>Maybe next time you will contribute.</Text>
      </View>
    );
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAE3A7',
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
