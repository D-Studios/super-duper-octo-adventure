import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './reusable-components/styles';
import constants from './reusable-components/GlobalConstants';
import {
  Provider as PaperProvider,
  Appbar,
  Text,
  TextInput,
  Button,
  ProgressBar,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { verifyOtp } from './twilio';

export default function OTP() {
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params;

  const [otp, setOTP] = useState(constants.EMPTY_STRING);

  const handlePreviousPress = useCallback(() => {
    navigation.navigate('VerifyInformation');
  }, [navigation]);

  const handleNextPress = useCallback(async () => {
    try {
      const response = await verifyOtp(otp);
      if (response.status === 'approved') {
        Alert.alert('Success', 'OTP verified successfully');
        navigation.navigate('Confirm');
      } else {
        Alert.alert('Error', 'OTP verification failed');
      }
    } catch (error) {
      console.error('OTP verification error:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'OTP verification failed');
    }
  }, [navigation, otp]);

  const clearOTP = () => setOTP(constants.EMPTY_STRING);

  const handleOTPChange = (text) => {
    setOTP(text);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={handlePreviousPress} />
          <Appbar.Content title="Enter Verification Code" />
        </Appbar.Header>

        <ProgressBar progress={0.33} style={styles.progressBar} />

        <View style={styles.content}>
          <Text style={styles.title}>
            Please enter the code sent to your{'\n'}mobile phone number.{'\n'}
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Verification Code"
              value={otp}
              style={styles.input}
              keyboardType="numeric"
              placeholder={constants.EMPTY_STRING}
              onChangeText={handleOTPChange}
            />
            {otp !== constants.EMPTY_STRING && (
              <TouchableOpacity style={styles.clearButton} onPress={clearOTP}>
                <Icon name="close" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          <Button mode="contained" style={styles.button} onPress={handleNextPress}>
            Next
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
