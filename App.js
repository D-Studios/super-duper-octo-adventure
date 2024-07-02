import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import OTP from './components/OTP.js';
import VerifyInformation from './components/VerifyInformation.js';
import Confirm from './components/Confirm.js';
import Approved from './components/Approved.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VerifyInformation">
        <Stack.Screen
          name="VerifyInformation"
          component={VerifyInformation}
          options={{ 
            headerShown: false,
            ...TransitionPresets.FadeFromBottomAndroid
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ 
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
          }}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{ 
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS
          }}
        />
        <Stack.Screen
          name="Approved"
          component={Approved}
          options={{ 
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
