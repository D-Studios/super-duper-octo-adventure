import React, { useState, useCallback, useEffect} from 'react';
import { View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './reusable-components/styles';
import { SegmentedButtons, Card, TouchableOpacity } from 'react-native-paper';
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

import formatDate from './reusable-components/FormatDate';
import {DatePickerInput} from 'react-native-paper-dates';

import StateDropdownPicker from './reusable-components/StateDropdownPicker';

export default function Confirm() {
  const navigation = useNavigation();
  
  const handlePreviousPress = useCallback(() => {
    navigation.navigate('VerifyInformation');
  }, [navigation]);

  const [firstName, setFirstName] = useState(constants.EMPTY_STRING);
  const [middleName, setMiddleName] = useState(constants.EMPTY_STRING);
  const [lastName, setLastName] = useState(constants.EMPTY_STRING);
  const [ssn, setSsn] = useState(constants.EMPTY_STRING);
  const [phone, setPhone] = useState(constants.EMPTY_STRING);
  const [dob, setDOB] = useState(new Date());
  const [addr1, setAddr1] = useState(constants.EMPTY_STRING);
  const [addr2, setAddr2] = useState(constants.EMPTY_STRING);
  const [city, setCity] = useState(constants.EMPTY_STRING);
  const [zip, setZip] = useState(constants.EMPTY_STRING);
  const [income, setIncome] = useState(constants.EMPTY_STRING);
  const [housing, setHousing] = useState(constants.EMPTY_STRING);
  const [citizen, setCitizen] = useState(constants.EMPTY_STRING);
  const [formattedDate, setFormattedDate] = useState('date');

  const [selectedState, setSelectedState] = useState('Select a state');



  const handleStateSelect = (state) => {
    setSelectedState(state);
    // Handle state selection logic here
  };

  useEffect(() => {
    console.log("Selected State: " + selectedState);
  }, [selectedState]);

  // Next screen.
  const handleNextPress = useCallback(() => {
    navigation.navigate('Approved');
  }, [navigation]);

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
    setDOB(text);
    setFormattedDate(formatDate(text));
  };

  useEffect(() => {
    console.log("Value of formattedDate : " + formattedDate);
  }, [formattedDate]);

  const handleAddr1 = (text) => {
    setAddr1(text);
  };

  const handleAddr2 = (text) => {
    setAddr2(text);
  };

  const handleCity = (text) => {
    setCity(text);
  };


  const handleZip = (text) => {
    setZip(text.slice(0,5));
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
  const clearAddr1 = () => setAddr1(constants.EMPTY_STRING);
  const clearAddr2 = () => setAddr2(constants.EMPTY_STRING);
  const clearCity = () => setCity(constants.EMPTY_STRING);
  const clearZip = () => setZip(constants.EMPTY_STRING);
  const clearIncome = () => setIncome(constants.EMPTY_STRING);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Appbar.Header>
            {/*Back button goes back to Verify Information. */}
            <View testID = "Back Button" >
            <Appbar.BackAction onPress={handlePreviousPress} />
            </View>
            {/* This is the title */}
            <Appbar.Content title="Confirm" />
          </Appbar.Header>

          {/* Progress bar. */}
          <ProgressBar progress={0.67} style={styles.progressBar} />

          <View style={styles.content}>
            {/* Basic box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Basic</Text>

            <View testID="First Name" >
              {/* First Name */}
              <InputField
                label="First Name"
                accessibilityLabel = "First Name"
              
                value={firstName}
                onChangeText={handleFirstName}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearFirstName}
              />
              </View>

            <View testID = "Middle Name" >
              {/* Middle Name */}
              <InputField
                label="Middle Name"
                value={middleName}
                onChangeText={handleMiddleName}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearMiddleName}
              />
            </View>


            <View testID = "Last Name" >
              {/* Last Name */}
              <InputField
                label="Last Name"
                value={lastName}
                onChangeText={handleLastName}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearLastName}
              />
            </View>
            </Card>

            {/* Identity box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Identity</Text>
              {/* Input for Social Security Number */}
              <View testID = "Social Security Number" >
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
              </View>
              <View testID = "Mobile Phone Number">
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
              </View>

    <View testID = "Date of Birth">
      <DatePickerInput
      locale = "en"
      label="Date of Birth"
      value = {dob}
      onChange={handleDOB}
      inputMode="start" 
      style = {{width: 200}}
      mode = "outlined"
      />
  </View>
            </Card>

            {/* Address Box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Address</Text>
              {/* Input for Address 1 */}
              <View testID = "Address 1">
              <InputField
                label="Address 1"
                value={addr1}
                onChangeText={handleAddr1}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearAddr1}
              />
              </View>
              {/* Input for Address 2 */}
              <View testID = "Address 2">
              <InputField
                label="Address 2"
                value={addr2}
                onChangeText={handleAddr2}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearAddr2}
              />
              </View>
              <View testID = "City">
              {/* Input for City*/}
              <InputField
                label="City"
                value={city}
                onChangeText={handleCity}
                keyboardType="default"
                placeholder={constants.EMPTY_STRING}
                onClear={clearCity}
              />
              </View>

<View style={styles.container}>
      <Text style={styles.title}>Select a State</Text>
      <StateDropdownPicker selectedValue={selectedState} onSelect={handleStateSelect} />
    </View>
             <View testID = "Zip">
              {/* Input for Zip Code*/}
              <InputField
                label="Zip"
                value={zip}
                onChangeText={handleZip}
                keyboardType="numeric"
                placeholder={constants.EMPTY_STRING}
                onClear={clearZip}
                maxLength={constants.ZIP_CODE_LENGTH}
              />
              </View>
            </Card>

            {/* Other Box */}
            <Card mode='elevated' style={styles.boxContainer}>
              <Text style={styles.title}>Other</Text>
              {/* Input for Annual Income (In Thousands)*/}
              <Text style = {styles.miniTitle}>Annual Income ($)</Text>
              <View testID = "Annual Income ($)">
              <InputField
                label="Annual Income ($)"
                value={income}
                onChangeText={handleIncome}
                keyboardType="numeric"
                placeholder={constants.EMPTY_STRING}
                onClear={clearIncome}
              />
              </View>
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
