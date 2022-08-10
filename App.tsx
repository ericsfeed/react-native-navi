import { StatusBar } from 'expo-status-bar';

import RootNavigator from './src/navigation'; // picks up index.tsx

import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}

