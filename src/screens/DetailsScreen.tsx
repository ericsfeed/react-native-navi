import { ScrollView, View, Text } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { ContactStackNavigatorParamList } from '../navigation/types';

import type { RouteProp } from '@react-navigation/native';

type DetailsScreenRouteProp = RouteProp<ContactStackNavigatorParamList, 'Details'>;

import { globalStyles } from '../styles/styles';


const DetailScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { name, birthYear } = route.params;

  return (
    <ScrollView style={globalStyles.droidSafeArea} contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={globalStyles.heading1}>Contact Details</Text>
      <View style={{ flex: 1, backgroundColor: '#FBEEC6', paddingTop: 12, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, paddingBottom: 24 }}>This is the Details screen.</Text>
        <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name: {name}</Text>
        <Text style={{ fontSize: 18 }}>Birth Year: {birthYear}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
