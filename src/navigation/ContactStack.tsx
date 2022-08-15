import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ContactTab from '../screens/ContactTab';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  //  'contact screen' subnav will be hidden
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact Screen"
        component={ContactTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
