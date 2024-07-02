import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SegmentedButtons, Card } from 'react-native-paper';
import {
  Provider as PaperProvider,
  Appbar,
  Text,
  ProgressBar,
  Button,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import InputField from './reusable-components/InputField';

export default function Confirm() {
  const navigation = useNavigation();

  // Previous screen.
  const handlePreviousPress = useCallback(() => {
    navigation.navigate('OTP');
  }, [navigation]);

  // Next screen.
  const handleNextPress = useCallback(() => {
    navigation.navigate('Approved');
  }, [navigation]);

  const EMPTY_STRING = '';

  const [firstName, setFirstName] = useState(EMPTY_STRING);
  const [middleName, setMiddleName] = useState(EMPTY_STRING);
  const [lastName, setLastName] = useState(EMPTY_STRING);
  const [ssn, setSsn] = useState(EMPTY_STRING);
  const [phone, setPhone] = useState(EMPTY_STRING);
  const [dob, setDOB] = useState(EMPTY_STRING);
  const [addr1, setAddr1] = useState(EMPTY_STRING);
  const [addr2, setAddr2] = useState(EMPTY_STRING);
  const [city, setCity] = useState(EMPTY_STRING);
  const [state, setState] = useState(EMPTY_STRING);
  const [zip, setZip] = useState(EMPTY_STRING);
  const [income, setIncome] = useState(EMPTY_STRING);
  const [housing, setHousing] = useState('');
  const [citizen, setCitizen] = useState('');

  const ONLY_DIGITS = /[^\d]/g;
  const PHONE_NUMBER_LENGTH = 10;
  const PHONE_HYPHEN_FIRST_POS = 3;
  const PHONE_HYPHEN_SECOND_POS = 6;
  const SSN_HYPHEN_FIRST_POS = 3;
  const SSN_HYPHEN_SECOND_POS = 5;
  const HYPHEN = '-';
  const SLASH = '/';
  const SSN_LENGTH = 9;
  const TEXT_MAX_LENGTH = 100;
  const PHONE_MAX_LENGTH = 20; // Adjusted to account for '-' characters
  const SSN_MAX_LENGTH = 18; // Adjusted to account for '-' characters
  const DATE_MAX_LENGTH = 10; // Adjusted to account for '/' characters
  const DATE_SLASH_FIRST_POS = 2;
  const DATE_SLASH_SECOND_POS = 4;

  const inputBoxHelper = (text, length, symbol, symbolFirstPos, symbolSecondPos) => {
    // Get only the digits entered.
    const formattedText = text.replace(ONLY_DIGITS, EMPTY_STRING);
    let formattedOutput = EMPTY_STRING;

    // Loop through all the digits, adding hyphens where appropriate.
    for (let i = 0; i < formattedText.length && i < length; i++) {
      if (i === symbolFirstPos || i === symbolSecondPos) {
        formattedOutput += symbol;
      }
      formattedOutput += formattedText[i];
    }
    return formattedOutput;
  };

  const handleFirstName = (text) => {
    setFirstName(text);
  };

  const handleMiddleName = (text) => {
    setMiddleName(text);
  };

  const handleLastName = (text) => {
    setLastName(text);
  };

  const handleSsn = (text) => {
    setSsn(inputBoxHelper(text, SSN_LENGTH, HYPHEN, SSN_HYPHEN_FIRST_POS, SSN_HYPHEN_SECOND_POS));
  };

  const handlePhone = (text) => {
    setPhone(inputBoxHelper(text, PHONE_NUMBER_LENGTH, HYPHEN, PHONE_HYPHEN_FIRST_POS, PHONE_HYPHEN_SECOND_POS));
  };

  const handleDOB = (text) => {
    setDOB(inputBoxHelper(text, DATE_MAX_LENGTH, SLASH, DATE_SLASH_FIRST_POS, DATE_SLASH_SECOND_POS));
  };

  const handleAddr1 = (text) => {
    setAddr1(text);
  };

  const handleAddr2 = (text) => {
    setAddr2(text);
  };

  const handleCity = (text) => {
    setCity(text);
  };

  const handleState = (text) => {
    setState(text);
  };

  const handleZip = (text) => {
    setZip(text);
  };

  const handleIncome = (val) => {
    setIncome(val);
  };

  const handleHousing = (val) => {
    setHousing(val);
  };

  const handleCitizen = (val) => {
    setCitizen(val);
  };

  const clearFirstName = () => setFirstName(EMPTY_STRING);
  const clearMiddleName = () => setMiddleName(EMPTY_STRING);
  const clearLastName = () => setLastName(EMPTY_STRING);
  const clearSsn = () => setSsn(EMPTY_STRING);
  const clearPhone = () => setPhone(EMPTY_STRING);
  const clearDOB = () => setDOB(EMPTY_STRING);
  const clearAddr1 = () => setAddr1(EMPTY_STRING);
  const clearAddr2 = () => setAddr2(EMPTY_STRING);
  const clearCity = () => setCity(EMPTY_STRING);
  const clearState = () => setState(EMPTY_STRING);
  const clearZip = () => setZip(EMPTY_STRING);
  const clearIncome = () => setIncome(EMPTY_STRING);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Appbar.Header>
            {/* This is the back button */}
            <Appbar.BackAction onPress={handlePreviousPress} />
            {/* This is the title */}
            <Appbar.Content title="Confirm" />
          </Appbar.Header>

          {/* Progress bar. */}
          <ProgressBar progress={0.67} style={styles.progressBar} />

          <View style={styles.content}>
            {/* Basic box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Basic</Text>

              {/* First Name */}
              <InputField
                label="First Name"
                value={firstName}
                onChangeText={handleFirstName}
                keyboardType="default"
                maxLength={TEXT_MAX_LENGTH}
                placeholder={EMPTY_STRING}
                onClear={clearFirstName}
              />

              {/* Middle Name */}
              <InputField
                label="Middle Name"
                value={middleName}
                onChangeText={handleMiddleName}
                keyboardType="default"
                maxLength={TEXT_MAX_LENGTH}
                placeholder={EMPTY_STRING}
                onClear={clearMiddleName}
              />

              {/* Last Name */}
              <InputField
                label="Last Name"
                value={lastName}
                onChangeText={handleLastName}
                keyboardType="default"
                maxLength={TEXT_MAX_LENGTH}
                placeholder={EMPTY_STRING}
                onClear={clearLastName}
              />
            </Card>

            {/* Identity box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Identity</Text>
              <InputField
                label="Social Security Number"
                value={ssn}
                onChangeText={handleSsn}
                keyboardType="numeric"
                maxLength={SSN_MAX_LENGTH}
                placeholder={EMPTY_STRING}
                onClear={clearSsn}
              />
              <InputField
                label="Mobile Phone Number"
                value={phone}
                onChangeText={handlePhone}
                keyboardType="numeric"
                maxLength={PHONE_MAX_LENGTH}
                placeholder={EMPTY_STRING}
                onClear={clearPhone}
              />
              <InputField
                label="Date of Birth"
                value={dob}
                onChangeText={handleDOB}
                keyboardType="numeric"
                placeholder={EMPTY_STRING}
                onClear={clearDOB}
              />
            </Card>

            {/* Address Box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Address</Text>
              <InputField
                label="Address 1"
                value={addr1}
                onChangeText={handleAddr1}
                keyboardType="default"
                placeholder={EMPTY_STRING}
                onClear={clearAddr1}
              />
              <InputField
                label="Address 2"
                value={addr2}
                onChangeText={handleAddr2}
                keyboardType="default"
                placeholder={EMPTY_STRING}
                onClear={clearAddr2}
              />
              <InputField
                label="City"
                value={city}
                onChangeText={handleCity}
                keyboardType="default"
                placeholder={EMPTY_STRING}
                onClear={clearCity}
              />
              <InputField
                label="State"
                value={state}
                onChangeText={handleState}
                keyboardType="default"
                placeholder={EMPTY_STRING}
                onClear={clearState}
              />
              <InputField
                label="Zip"
                value={zip}
                onChangeText={handleZip}
                keyboardType="numeric"
                placeholder={EMPTY_STRING}
                onClear={clearZip}
              />
            </Card>

            {/* Other Box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Other</Text>
              <InputField
                label="Annual Income (In Thousands)"
                value={income}
                onChangeText={handleIncome}
                keyboardType="numeric"
                placeholder={EMPTY_STRING}
                onClear={clearIncome}
              />
              <View>
                <Text style={styles.miniTitle}>Housing</Text>
                <SegmentedButtons
                  value={housing}
                  onValueChange={handleHousing}
                  buttons={[
                    {
                      value: 'rent',
                      label: 'Rent',
                      style: { backgroundColor: housing === 'rent' ? '#6750a4' : 'white' },
                      labelStyle: { color: housing === 'rent' ? 'white' : '#6750a4' },
                    },
                    {
                      value: 'own',
                      label: 'Own',
                      style: { backgroundColor: housing === 'own' ? '#6750a4' : 'white' },
                      labelStyle: { color: housing === 'own' ? 'white' : '#6750a4' },
                    },
                  ]}
                />
              </View>
              <View>
                <Text style={styles.miniTitle}>{'\n'}USA Citizen</Text>
                <SegmentedButtons
                  value={citizen}
                  onValueChange={handleCitizen}
                  buttons={[
                    {
                      value: 'yes',
                      label: 'Yes',
                      style: { backgroundColor: citizen === 'yes' ? '#6750a4' : 'white' },
                      labelStyle: { color: citizen === 'yes' ? 'white' : '#6750a4' },
                    },
                    {
                      value: 'no',
                      label: 'No',
                      style: { backgroundColor: citizen === 'no' ? '#6750a4' : 'white' },
                      labelStyle: { color: citizen === 'no' ? 'white' : '#6750a4' },
                    },
                  ]}
                />
              </View>
            </Card>

            {/* Next button */}
            <Button mode="contained" style={styles.button} onPress={handleNextPress}>
              Next
            </Button>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </ScrollView>
  );
}
