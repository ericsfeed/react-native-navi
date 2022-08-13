import React, { useState } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import * as LocalAuthentication from 'expo-local-authentication';



import {RootStackParamList} from '../navigation/types'; 

import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

import { Creepster_400Regular } from "@expo-google-fonts/creepster";

enum EResult {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}


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

  const [facialRecognitionAvailable, setFacialRecognitionAvailable] = React.useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
  const [irisAvailable, setIrisAvailable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<EResult>();

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types && types.length) {
      setFacialRecognitionAvailable(types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION));
      setFingerprintAvailable(types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT));
      setIrisAvailable(types.includes(LocalAuthentication.AuthenticationType.IRIS));
    }
  };

 

  const authenticate = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const results = await LocalAuthentication.authenticateAsync();

      if (results.success) {
        setResult(EResult.SUCCESS);
        navigation.navigate('Main')
      } else if (results.error === 'unknown') {
        setResult(EResult.DISABLED);
      } else if (
        results.error === 'user_cancel' ||
        results.error === 'system_cancel' ||
        results.error === 'app_cancel'
      ) {
        setResult(EResult.CANCELLED);
      }
    } catch (error) {
      setResult(EResult.ERROR);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    checkSupportedAuthentication();
  }, []);

  let resultMessage;
  switch (result) {
    case EResult.CANCELLED:
      resultMessage = 'Authentication process has been cancelled';
      break;
    case EResult.DISABLED:
      resultMessage = 'Biometric authentication has been disabled';
      break;
    case EResult.ERROR:
      resultMessage = 'There was an error in authentication';
      break;
    case EResult.SUCCESS:
      resultMessage = 'Successfully authenticated';
      break;
    default:
      resultMessage = '';
      break;
  }

  let description;
  if (facialRecognitionAvailable && fingerprintAvailable && irisAvailable) {
    description = 'Authenticate with Face ID, touch ID or iris ID';
  } else if (facialRecognitionAvailable && fingerprintAvailable) {
    description = 'Authenticate with Face ID or touch ID';
  } else if (facialRecognitionAvailable && irisAvailable) {
    description = 'Authenticate with Face ID or iris ID';
  } else if (fingerprintAvailable && irisAvailable) {
    description = 'Authenticate with touch ID or iris ID';
  } else if (facialRecognitionAvailable) {
    description = 'Authenticate with Face ID';
  } else if (fingerprintAvailable) {
    description = 'Authenticate with Touch ID ';
  } else if (irisAvailable) {
    description = 'Authenticate with iris ID';
  } else {
    description = 'Biometric authentication is not supported on this device.';
  }




  if (!fontsLoaded) {
    return null;
  } else {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 24, paddingBottom: 30, fontFamily: "RobotoMono_500Medium" }]}>
         You are here.
         </Text>
        <Text
          style={[ styles.text,{ fontSize: 36,  paddingBottom: 30, fontFamily: "Creepster_400Regular" } ]}>
          The Horror
          </Text>
          <Text style={[styles.text, { fontSize: 28, paddingBottom: 30, fontFamily: "RobotoMono_500Medium" }]}>
         Who knows what will happen next? 
        </Text>
        <Text style={[styles.text, { fontSize: 14, fontFamily: "RobotoMono_500Medium" }]}>
        {description}. </Text>
        {facialRecognitionAvailable || fingerprintAvailable || irisAvailable ? (
          <Button title="Authenticate" onPress={ authenticate} />
        ) : null }
        {resultMessage ? (  <Text> Authenticated. </Text>  ) : null }
        <Text style={[styles.text, { fontSize: 14, fontFamily: "RobotoMono_500Medium" }]}>
          Similate a login by clicking the button. 
          </Text>
        <Button 
        title="Sign In" 
        style={[styles.text, { fontSize: 24, fontFamily: "RobotoMono_500Medium" }]}
        onPress={() => {     navigation.navigate('Main') }}
         />
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

