import React, { useState, useCallback } from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import formatInputBox from './reusable-components/FormatInputBox';

export default function VerifyInformation() {
  const navigation = useNavigation();

  // Previous screen.
  const handlePreviousPress = useCallback(() => {
    navigation.navigate('VerifyInformation');
  }, [navigation]);

  // Next screen.
  const handleNextPress = useCallback(() => {
    navigation.navigate('OTP');
  }, [navigation]);

  // Privacy Policy.
  const handlePrivacyPolicy = async () => {
    const url = 'https://www.yahoo.com';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };


  const [phone, setPhone] = useState(constants.EMPTY_STRING);
  const [ssn, setSsn] = useState(constants.EMPTY_STRING);

  const clearPhone = () => setPhone(constants.EMPTY_STRING);
  const clearSsn = () => setSsn(constants.EMPTY_STRING);

  const handlePhoneChange = (text) => {
    setPhone(formatInputBox(text, constants.PHONE_NUMBER_LENGTH, constants.HYPHEN, constants.PHONE_HYPHEN_FIRST_POS, constants.PHONE_HYPHEN_SECOND_POS));
  };

  const handleSsnChange = (text) => {
    setSsn(formatInputBox(text, constants.SSN_LENGTH, constants.HYPHEN, constants.NO_VISIBLE_HYPHEN, constants.NO_VISIBLE_HYPHEN));
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          {/* This is the back button */}
          <Appbar.BackAction onPress={handlePreviousPress} />
           {/* This is the title */}
          <Appbar.Content title="Verify and Pre-fill Application" />
        </Appbar.Header>

        {/* Progress bar. */}
        <ProgressBar progress={0} style={styles.progressBar} />

        <View style={styles.content}>
          <View style={styles.inputContainer}>
            {/* Input for Mobile Phone Number */}
            <TextInput
              label="Mobile Phone Number"
              value={phone}
              onChangeText={handlePhoneChange}
              style={styles.input}
              keyboardType="numeric"
              maxLength={constants.PHONE_MAX_LENGTH}
              placeholder={constants.DEFAULT_PHONE}
            />
            {phone !== constants.EMPTY_STRING && (
              <TouchableOpacity style={styles.clearButton} onPress={clearPhone}>
                <Icon name="close" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.content}>
            {/*Consent and Disclosure Text*/}
            <Text>
              We ask for your Social Security number or Individual Tax Identification Number (ITIN) to{'\n'}
              help prefill your information in this application process, verify your identity, and obtain your{'\n'}
              credit history for processing your application.
            </Text>
          </View>

          <View style={styles.inputContainer}>
             {/* Input for Social Security Number */}
            <TextInput
              label="Social Security Number"
              value={ssn}
              onChangeText={handleSsnChange}
              style={styles.input}
              keyboardType="numeric"
              maxLength={constants.SSN_MAX_LENGTH}
              placeholder={constants.DEFAULT_SSN}
              secureTextEntry={true}
            />
            {ssn !== constants.EMPTY_STRING && (
              <TouchableOpacity style={styles.clearButton} onPress={clearSsn}>
                <Icon name="close" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.content}>
            {/*Consent and Disclosure Text*/}
            <Text>
              By providing your number, you agree to receive a one-time text message from ***** *****{'\n'}
              with a link to verify your identity. Message and data rates may apply.{'\n'}
              You authorize your wireless carrier to use or disclose information about your account and{'\n'}
              your wireless device, if available, to ***** *****, its Affiliates, or its service provider for the{'\n'}
              duration of your business relationship, solely to help them identify you or your wireless{'\n'}
              device and to prevent fraud. See our <Text style={styles.url} onPress={handlePrivacyPolicy}>Privacy Policy</Text> for how we treat your data.{'\n'}
            </Text>
          </View>
          
          {/* Next button */}
          <Button mode="contained" style={styles.button} onPress={handleNextPress}>
            Next
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
