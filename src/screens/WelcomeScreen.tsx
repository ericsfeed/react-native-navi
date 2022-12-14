import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';


import * as LocalAuthentication from 'expo-local-authentication';

import { RootStackParamList } from '../navigation/types';
import { globalStyles } from '../styles/styles';

import Footer from '../components/Footer';


import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold
} from '@expo-google-fonts/roboto-mono';

import { Creepster_400Regular } from '@expo-google-fonts/creepster';

enum EResult {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen = () => {
  const navigation = useNavigation<welcomeScreenProp>();
  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold,
    Creepster_400Regular
  });
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] = React.useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
  const [irisAvailable, setIrisAvailable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<EResult>();

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types && types.length) {
      setFacialRecognitionAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)
      );
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
        navigation.navigate('Main');
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
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={globalStyles.droidSafeArea} contentContainerStyle={{ flexGrow: 1 }}>

          <View style={styles.container}>
            <Text
              style={[
                styles.text,
                { fontSize: 32, paddingBottom: 30, fontFamily: 'RobotoMono_700Bold' }
              ]}>
              Welcome to the Demo
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 42, paddingBottom: 30, fontFamily: 'Creepster_400Regular' }
              ]}>
              Congratulations
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 22, paddingBottom: 30, fontFamily: 'RobotoMono_500Medium' }
              ]}>
              What will happen next?
            </Text>
            <Text style={[styles.text, { fontSize: 14, fontFamily: 'RobotoMono_500Medium' }]}>
              {description}.{' '}
            </Text>
            <Text style={[styles.text, { fontSize: 14, fontFamily: 'RobotoMono_500Medium' }]}>
              {facialRecognitionAvailable || fingerprintAvailable || irisAvailable ? (
                <Button title="Authenticate" onPress={authenticate} />
              ) : null}
            </Text>
            <Text style={[styles.text, { fontSize: 14, fontFamily: 'RobotoMono_500Medium' }]}>
              {resultMessage ? <Text> Authenticated. </Text> : null}
            </Text>
            <Text style={[
              styles.text,
              {
                fontSize: 14, fontFamily: 'RobotoMono_500Medium'
              }
            ]}>
              Similate a login by clicking the button!
            </Text>
            <Button
              title="Sign In"
              style={[styles.text, { fontSize: 24, fontFamily: 'RobotoMono_500Medium' }]}
              onPress={() => {
                navigation.navigate('Main');
              }}
            />
          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5D8AB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    paddingVertical: 10
  }
});
