import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './reusable-components/styles';
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
import constants from './reusable-components/GlobalConstants';
import formatInputBox from './reusable-components/FormatInputBox';

export default function Confirm() {
  const navigation = useNavigation();

  // Next screen.
  const handleNextPress = useCallback(() => {
    navigation.navigate('Approved');
  }, [navigation]);

  const [firstName, setFirstName] = useState(constants.EMPTY_STRING);
  const [middleName, setMiddleName] = useState(constants.EMPTY_STRING);
  const [lastName, setLastName] = useState(constants.EMPTY_STRING);
  const [ssn, setSsn] = useState(constants.EMPTY_STRING);
  const [phone, setPhone] = useState(constants.EMPTY_STRING);
  const [dob, setDOB] = useState(constants.EMPTY_STRING);
  const [addr1, setAddr1] = useState(constants.EMPTY_STRING);
  const [addr2, setAddr2] = useState(constants.EMPTY_STRING);
  const [city, setCity] = useState(constants.EMPTY_STRING);
  const [state, setState] = useState(constants.EMPTY_STRING);
  const [zip, setZip] = useState(constants.EMPTY_STRING);
  const [income, setIncome] = useState(constants.EMPTY_STRING);
  const [housing, setHousing] = useState(constants.EMPTY_STRING);
  const [citizen, setCitizen] = useState(constants.EMPTY_STRING);

  const SLASH = '/';
  const DEFAULT_DATE = 'mm/dd/yyyy';
  const DATE_MAX_LENGTH = 10;
  const DATE_SLASH_FIRST_POS = 2;
  const DATE_SLASH_SECOND_POS = 4;

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
    setSsn(formatInputBox(text, constants.SSN_LENGTH, constants.HYPHEN, constants.NO_VISIBLE_HYPHEN, constants.NO_VISIBLE_HYPHEN));
  };

  const handlePhone = (text) => {
    setPhone(formatInputBox(text, constants.PHONE_NUMBER_LENGTH, constants.HYPHEN, constants.PHONE_HYPHEN_FIRST_POS, constants.PHONE_HYPHEN_SECOND_POS));
  };

  const handleDOB = (text) => {
    setDOB(formatInputBox(text, DATE_MAX_LENGTH, SLASH, DATE_SLASH_FIRST_POS, DATE_SLASH_SECOND_POS));
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

  const clearFirstName = () => setFirstName(constants.EMPTY_STRING);
  const clearMiddleName = () => setMiddleName(constants.EMPTY_STRING);
  const clearLastName = () => setLastName(constants.EMPTY_STRING);
  const clearSsn = () => setSsn(constants.EMPTY_STRING);
  const clearPhone = () => setPhone(constants.EMPTY_STRING);
  const clearDOB = () => setDOB(constants.EMPTY_STRING);
  const clearAddr1 = () => setAddr1(constants.EMPTY_STRING);
  const clearAddr2 = () => setAddr2(constants.EMPTY_STRING);
  const clearCity = () => setCity(constants.EMPTY_STRING);
  const clearState = () => setState(constants.EMPTY_STRING);
  const clearZip = () => setZip(constants.EMPTY_STRING);
  const clearIncome = () => setIncome(constants.EMPTY_STRING);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Appbar.Header>
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
                placeholder={constants.EMPTY_STRING}
                onClear={clearFirstName}
              />

              {/* Middle Name */}
              <InputField
                label="Middle Name"
                value={middleName}
                onChangeText={handleMiddleName}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearMiddleName}
              />

              {/* Last Name */}
              <InputField
                label="Last Name"
                value={lastName}
                onChangeText={handleLastName}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearLastName}
              />
            </Card>

            {/* Identity box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Identity</Text>
              {/* Input for Social Security Number */}
              <InputField
                label="Social Security Number"
                value={ssn}
                onChangeText={handleSsn}
                keyboardType="numeric"
                maxLength={constants.SSN_MAX_LENGTH}
                placeholder={constants.DEFAULT_SSN}
                secureTextEntry={true} 
                onClear={clearSsn}
              />
              {/* Input for Mobile Phone Number */}
              <InputField
                label="Mobile Phone Number"
                value={phone}
                onChangeText={handlePhone}
                keyboardType="numeric"
                maxLength={constants.PHONE_MAX_LENGTH}
                placeholder={constants.DEFAULT_PHONE}
                onClear={clearPhone}
              />
              {/* Input for Date of Birth */}
              <InputField
                label="Date of Birth"
                value={dob}
                onChangeText={handleDOB}
                keyboardType="numeric"
                placeholder={DEFAULT_DATE}
                maxLength = {DATE_MAX_LENGTH}
                onClear={clearDOB}
              />
            </Card>

            {/* Address Box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Address</Text>
              {/* Input for Address 1 */}
              <InputField
                label="Address 1"
                value={addr1}
                onChangeText={handleAddr1}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearAddr1}
              />
              {/* Input for Address 2 */}
              <InputField
                label="Address 2"
                value={addr2}
                onChangeText={handleAddr2}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearAddr2}
              />
              {/* Input for City*/}
              <InputField
                label="City"
                value={city}
                onChangeText={handleCity}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearCity}
              />
              {/* Input for State */}
              <InputField
                label="State"
                value={state}
                onChangeText={handleState}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearState}
              />
              {/* Input for Zip Code*/}
              <InputField
                label="Zip"
                value={zip}
                onChangeText={handleZip}
                keyboardType="numeric"
                placeholder={constants.EMPTY_STRING}
                onClear={clearZip}
              />
            </Card>

            {/* Other Box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Other</Text>
              {/* Input for Annual Income (In Thousands)*/}
              <Text style = {styles.miniTitle}>Annual Income (In Thousands)</Text>
              <InputField
                label="Annual Income (In Thousands)"
                value={income}
                onChangeText={handleIncome}
                keyboardType="numeric"
                placeholder={constants.EMPTY_STRING}
                onClear={clearIncome}
              />
              <View>
                <Text style={styles.miniTitle}>Housing</Text>
                {/* Input for Housing (Rent or Own)*/}
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
                {/* Input for USA Citizen (Yes or No)*/}
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
