import React, { useState } from 'react';

import { StyleSheet, View, ScrollView, Text, Button, Image, SafeAreaView } from 'react-native';

import {
  useFonts,
  RobotoMono_500Medium,
  RobotoMono_700Bold
} from '@expo-google-fonts/dev';

import * as ImagePicker from 'expo-image-picker';

import { globalStyles } from '../styles/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProfileScreen() {
  const [pickedImagePath, setPickedImagePath] = useState('');

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();


    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

  const [fontsLoaded] = useFonts({
    RobotoMono_500Medium,
    RobotoMono_700Bold
  });

  if (!fontsLoaded) {
    return null;
  } else {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView style={globalStyles.droidSafeArea} contentContainerStyle={{ flex: 10 }}>
          <Text style={globalStyles.heading1}>Profile</Text>
          <View style={styles.container}>
            <Text style={styles.copy}>Choose an image for your profile:</Text>
            <Button onPress={showImagePicker} title="Select an image" />
            <Button onPress={openCamera} title="Open camera" />
            <View style={styles.imageContainer}>
              {
                pickedImagePath !== '' && <Image
                  source={{ uri: pickedImagePath }}
                  style={styles.image}
                />
              }
            </View>
          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    padding: 30
  },
  image: {
    width: 280,
    height: 200,
    resizeMode: 'cover'
  },
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
