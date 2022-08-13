import { StyleSheet, View, Text } from 'react-native';

import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_500Medium_Italic,
  RobotoMono_700Bold,
  RobotoMono_700Bold_Italic,
} from "@expo-google-fonts/roboto-mono";

import { Creepster_400Regular } from "@expo-google-fonts/creepster";

const ProfileScreen = () => {
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
        <Text style={[styles.text, { fontSize: 20, fontFamily: "RobotoMono_500Medium" }]}>
        This is the Profile screen.
        </Text>
        <Text
          style={[ styles.text,{ fontSize: 36, fontFamily: "Creepster_400Regular" } ]}>
          I'm So Sorry 
          </Text>
        <Text style={[styles.text, { fontSize: 20, fontFamily: "RobotoMono_500Medium" }]}>
          Maybe next time you will contribute. 
        </Text>
    </View>
    );
  }
};


export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAE3A7",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    paddingVertical: 10,
  },
});


