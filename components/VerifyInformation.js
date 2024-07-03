import React, { useState, useCallback } from 'react';
import { View, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './reusable-components/styles';
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

  const EMPTY_STRING = '';
  const DEFAULT_PHONE = '_ _ _ - _ _ _ - _ _ _ _';
  const DEFAULT_SSN = '_ _ _ - _ _ - _ _ _ _';
  const [phone, setPhone] = useState(EMPTY_STRING);
  const [ssn, setSsn] = useState(EMPTY_STRING);

  const ONLY_DIGITS = /[^\d]/g;
  const PHONE_NUMBER_LENGTH = 10;
  const PHONE_HYPHEN_FIRST_POS = 3;
  const PHONE_HYPHEN_SECOND_POS = 6;
  const NO_VISIBLE_HYPHEN = Infinity;
  const HYPHEN = '-';
  const SSN_LENGTH = 9;
  const PHONE_MAX_LENGTH = 20; // Adjusted to account for '-' characters
  const SSN_MAX_LENGTH = 18; // Adjusted to account for '-' characters

  const clearPhone = () => setPhone(EMPTY_STRING);
  const clearSsn = () => setSsn(EMPTY_STRING);

  const inputBoxHelper = (text, length, hyphenFirstPos, hyphenSecondPos) => {
    // Get only the digits entered.
    const formattedText = text.replace(ONLY_DIGITS, EMPTY_STRING);
    let formattedOutput = EMPTY_STRING;

    // Loop through all the digits, adding hyphens where appropriate.
    for (let i = 0; i < formattedText.length && i < length; i++) {
      if (i === hyphenFirstPos || i === hyphenSecondPos) {
        formattedOutput += HYPHEN;
      }
      formattedOutput += formattedText[i];
    }
    return formattedOutput;
  };

  const handlePhoneChange = (text) => {
    setPhone(inputBoxHelper(text, PHONE_NUMBER_LENGTH, PHONE_HYPHEN_FIRST_POS, PHONE_HYPHEN_SECOND_POS));
  };

  const handleSsnChange = (text) => {
    setSsn(inputBoxHelper(text, SSN_LENGTH, NO_VISIBLE_HYPHEN, NO_VISIBLE_HYPHEN));
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={handlePreviousPress} />
          <Appbar.Content title="Verify and Pre-fill Application" />
        </Appbar.Header>

        <ProgressBar progress={0} style={styles.progressBar} />

        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Mobile Phone Number"
              value={phone}
              onChangeText={handlePhoneChange}
              style={styles.input}
              keyboardType="numeric"
              maxLength={PHONE_MAX_LENGTH}
              placeholder={DEFAULT_PHONE}
            />
            {phone !== EMPTY_STRING && (
              <TouchableOpacity style={styles.clearButton} onPress={clearPhone}>
                <Icon name="close" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.content}>
            <Text>
              We ask for your Social Security number or Individual Tax Identification Number (ITIN) to{'\n'}
              help prefill your information in this application process, verify your identity, and obtain your{'\n'}
              credit history for processing your application.
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Social Security Number"
              value={ssn}
              onChangeText={handleSsnChange}
              style={styles.input}
              keyboardType="numeric"
              maxLength={SSN_MAX_LENGTH}
              placeholder={DEFAULT_SSN}
              secureTextEntry={true}
            />
            {ssn !== EMPTY_STRING && (
              <TouchableOpacity style={styles.clearButton} onPress={clearSsn}>
                <Icon name="close" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.content}>
            <Text>
              By providing your number, you agree to receive a one-time text message from Wells Fargo{'\n'}
              with a link to verify your identity. Message and data rates may apply.{'\n'}
              You authorize your wireless carrier to use or disclose information about your account and{'\n'}
              your wireless device, if available, to Wells Fargo, its Affiliates, or its service provider for the{'\n'}
              duration of your business relationship, solely to help them identify you or your wireless{'\n'}
              device and to prevent fraud. See our <Text style={styles.url} onPress={handlePrivacyPolicy}>Privacy Policy</Text> for how we treat your data.{'\n'}
            </Text>
          </View>

          <Button mode="contained" style={styles.button} onPress={handleNextPress}>
            Next
          </Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
