import React, { useState, useCallback, useEffect } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as LocalAuthentication from 'expo-local-authentication';
import OTP from './components/OTP.js';
import VerifyInformation from './components/VerifyInformation.js';
import Confirm from './components/Confirm.js';
import Approved from './components/Approved.js';
import CreditCardInformation from './components/CreditCardInformation.js';
import Transactions from './components/Transactions';
import MakePayment from './components/MakePayment';
import Rewards from './components/Rewards';
import styles from './components/reusable-components/styles';

const Stack = createStackNavigator();

function App() {
  /* const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      console.log("Supported types:", supportedTypes);

      if (hasHardware && supportedTypes.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION) && isEnrolled) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Please use Face ID to authenticate',
          fallbackLabel: 'Use Passcode',
        });

        if (result.success) {
          setIsAuthenticated(true);
        } else {
          Alert.alert('Authentication Failed', 'Please try again.');
        }
      } else if (hasHardware && supportedTypes.length > 0 && isEnrolled) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Please authenticate to access the app',
          fallbackLabel: 'Use Passcode',
        });

        if (result.success) {
          setIsAuthenticated(true);
        } else {
          Alert.alert('Authentication Failed', 'Please try again.');
        }
      } else {
        Alert.alert('Biometric Authentication Not Available', 'Your device does not support biometric authentication.');
      }

      setIsLoading(false);
    };

    authenticate();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerAlign]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return null;
  }
 */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Confirm">
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

export default App;