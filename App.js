import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OTP from './components/OTP.js';
import VerifyInformation from './components/VerifyInformation.js';
import Confirm from './components/Confirm.js';
import Approved from './components/Approved.js';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VerifyInformation">
        <Stack.Screen name="Confirm" component={Confirm} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyInformation" component={VerifyInformation} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
        <Stack.Screen name="Approved" component={Approved} options = {{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
