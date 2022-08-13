import { View, Text } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { ContactStackNavigatorParamList } from '../navigation/types';

import type { RouteProp } from '@react-navigation/native';

type DetailsScreenRouteProp = RouteProp<ContactStackNavigatorParamList, 'Details'>;

const DetailScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { name, birthYear } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#FFEEB8', paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18, paddingBottom: 24 }}>This is the Details screen.</Text>
      <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name: {name}</Text>
      <Text style={{ fontSize: 18 }}>Birth Year: {birthYear}</Text>
    </View>
  );
};

export default DetailScreen;
