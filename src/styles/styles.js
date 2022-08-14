import { StyleSheet, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
  heading1: {
    fontSize: 22,
    fontFamily: 'RobotoMono_700Bold',
    padding: 4,
    alignSelf: 'center',
  },
  heading2: {
    fontSize: 20,
    fontFamily: 'RobotoMono_700Bold',
    padding: 4
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: '#EFF0ED',
  },
});





