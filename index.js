import { AppRegistry } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import VerifyInformation from './components/VerifyInformation.js';
import OTP from './components/OTP.js';
import Confirm from './components/Confirm.js';
import Approved from './components/Approved.js';
import CreditCardInformation from './components/CreditCardInformation.js';
import Transactions from './components/Transactions';
import MakePayment from './components/MakePayment';
import Rewards from './components/Rewards';

const App = () =>{
    const Stack = createStackNavigator();
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
          <Stack.Screen
            name="CreditCardInformation"
            component={CreditCardInformation}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
          <Stack.Screen
            name="Transactions"
            component={Transactions}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
          <Stack.Screen
            name="MakePayment"
            component={MakePayment} 
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
          <Stack.Screen
            name="Rewards"
            component={Rewards}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


AppRegistry.registerComponent(
    'ReactNativeCCApp', 
    () => App
);