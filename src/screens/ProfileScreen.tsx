import { StyleSheet, View, Text } from 'react-native';
import AppLoading from "expo-app-loading";
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
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
        <Text
          style={[ styles.text,{ fontSize: 36, fontFamily: "Creepster_400Regular" } ]}>
          Welcome 
          </Text>
          <Text style={[styles.text, { fontSize: 20, fontFamily: "RobotoMono_400Regular" }]}>
          This is the Profile screen.
        </Text>
        <Text style={[styles.text, { fontSize: 20, fontFamily: "RobotoMono_500Medium" }]}>
        This is the Profile screen.
        </Text>
        <Text style={[styles.text, { fontSize: 20, fontFamily: "RobotoMono_500Medium" }]}>
          <b>This</b> is how we <i>roll</i>.
        </Text>
        <Text style={[styles.text, { fontSize: 36, fontFamily: "RobotoMono_400Regular" }]}>
          Impressive!
        </Text>
        <Text style={[styles.text, { fontSize: 10, fontFamily: "RobotoMono_400Regular" }]}>
          Not really!
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


