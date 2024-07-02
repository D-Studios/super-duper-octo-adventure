import React, { useState, useCallback } from 'react';
import {View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SegmentedButtons } from 'react-native-paper';

import {
  Provider as PaperProvider,
  Appbar,
  Text,
  TextInput,
  Button,
  ProgressBar,
} from 'react-native-paper';

import { SafeAreaView } from 'react-native';
import InputField from './reusable-components/InputField';

export default function Confirm() {

   const navigation = useNavigation();

   //Previous screen.
   const handlePreviousPress = useCallback(() => {
       navigation.navigate('OTP'); 
    }, [navigation]);

   //Next screen.
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
   const [housing, setHousing] = useState(EMPTY_STRING);
   const [citizen, setCitizen] = useState(EMPTY_STRING);

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
    //Get only the digits entered.
    const formattedText = text.replace(ONLY_DIGITS, EMPTY_STRING);
    let formattedOutput = EMPTY_STRING;

    //Loop through all the digits, adding hyphens where appropiate.
    for(let i = 0; i < formattedText.length && i < length; i++){
      if(i==symbolFirstPos || i == symbolSecondPos){
        formattedOutput += symbol;
      }
      formattedOutput += formattedText[i];
    }
    return formattedOutput;
 }


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
  }

  const handleAddr2 = (text) => {
      setAddr2(text);
  }

  const handleCity = (text) => {
      setCity(text);
  }

  const handleState = (text) => {
      setState(text);
  }

  const handleZip = (text) => {
      setZip(text);
  }

  const handleIncome = (val) => {
      setIncome(val);
  }

  const handleHousing = (val) => {
    setHousing(val);
  }

  const handleCitizen = (val) => {
    setCitizen(val);
  }

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
      	{/*This is the back button*/}
      	<Appbar.BackAction onPress={handlePreviousPress} />
      	{/*This is the title*/}
      	<Appbar.Content title="Confirm" />
    	</Appbar.Header>

    	{/*Progress bar.*/}
    	<ProgressBar progress={0.67} style={styles.progressBar} />  

    	<View style={styles.content}>
        {/* Basic box */}
        <View style = {styles.boxContainer}>
        <Text style = {styles.title}>Basic</Text>

        {/* First Name */}
        <InputField
          label="First Name"
          value={firstName}
          onChangeText={handleFirstName}
          style={styles.input}
          keyboardType="text"
          maxLength={TEXT_MAX_LENGTH}
          placeholder={EMPTY_STRING}
          onClear={clearFirstName}
        />

        {/* Middle Name */}
        <InputField
          label="Middle Name"
          value={middleName}
          onChangeText={handleMiddleName}
          style={styles.input}
          keyboardType="text"
          maxLength={TEXT_MAX_LENGTH}
          placeholder={EMPTY_STRING}
          onClear={clearMiddleName}
        />

        {/* Last Name */}
        <InputField
          label="Last Name"
          value={lastName}
          onChangeText={handleLastName}
          style={styles.input}
          keyboardType="text"
          maxLength={TEXT_MAX_LENGTH}
          placeholder={EMPTY_STRING}
          onClear={clearLastName}
        />
      </View>

        {/* Identity box */}
        <View style = {styles.boxContainer}>
        <Text style = {styles.title}>Identity</Text>
      	<View style={styles.inputContainer}>
            {/*Social Security Number*/}
        	<TextInput
          	label="Social Security Number"
          	value={ssn}
          	onChangeText={handleSsn}
          	style={styles.input}
            keyboardType="numeric"
            maxLength = {SSN_MAX_LENGTH}
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear Social Security Number*/}
        	<Button icon="close" onPress={clearSsn} />
        </View>
        <View style={styles.inputContainer}>
            {/*Mobile Phone Number*/}
        	<TextInput
          	label="Mobile Phone Number"
          	value={phone}
          	onChangeText={handlePhone}
          	style={styles.input}
            keyboardType="numeric"
            maxLength = {PHONE_MAX_LENGTH}
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear mobile phone number*/}
        	<Button icon="close" onPress={clearPhone} />
        </View>
        <View style={styles.inputContainer}>
            {/*Date Of Birth*/}
        	<TextInput
          	label="Date of Birth"
          	value={dob}
          	onChangeText={handleDOB}
          	style={styles.input}
          	keyboardType="numeric"
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear Date Of Birth*/}
        	<Button icon="close" onPress={clearDOB} />
        </View>
      	</View>

        {/*Address Box*/}
        <View style = {styles.boxContainer}>
        <Text style = {styles.title}>Address</Text>
      	<View style={styles.inputContainer}>
            {/*Address 1*/}
        	<TextInput
          	label="Address 1"
          	value={addr1}
          	onChangeText={handleAddr1}
          	style={styles.input}
          	keyboardType="text"
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear Address 1*/}
        	<Button icon="close" onPress={clearAddr1} />
        </View>
        <View style={styles.inputContainer}>
            {/*Address 2*/}
        	<TextInput
          	label="Address 2"
          	value={addr2}
          	onChangeText={handleAddr2}
          	style={styles.input}
          	keyboardType="text"
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear Address 2*/}
        	<Button icon="close" onPress={clearAddr2} />
        </View>
        <View style={styles.inputContainer}>
            {/*City*/}
        	<TextInput
          	label="City"
          	value={city}
          	onChangeText={handleCity}
          	style={styles.input}
          	keyboardType="text"
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear City*/}
        	<Button icon="close" onPress={clearCity} />
        </View>
        <View style={styles.inputContainer}>
            {/*State*/}
        	<TextInput
          	label="State"
          	value={state}
          	onChangeText={handleState}
          	style={styles.input}
          	keyboardType="text"
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear State*/}
        	<Button icon="close" onPress={clearState} />
        </View>
        <View style={styles.inputContainer}>
            {/*Zip*/}
        	<TextInput
          	label="Zip"
          	value={zip}
          	onChangeText={handleZip}
          	style={styles.input}
          	keyboardType="numeric"
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear Zip*/}
        	<Button icon="close" onPress={clearZip} />
        </View>
      	</View>

        {/*Other Box*/}
        <View style = {styles.boxContainer}>
        <Text style = {styles.title}>Other</Text>
        <View style={styles.inputContainer}>
            {/*Annual Income (in Thousands)*/}
        	<TextInput
          	label="Annual Income (In Thousands)"
          	value={income}
          	onChangeText={handleIncome}
          	style={styles.input}
          	keyboardType="numeric"
          	placeholder={EMPTY_STRING}
        	/>
          <Button icon="close" onPress={clearIncome} />
      	</View>
        <View>
          <Text style = {styles.miniTitle} >Housing</Text>
          <SegmentedButtons
           values = {housing}
           onValueChange={handleHousing}
           buttons = {[
             {
               value : true,
               label : 'Yes',
               style : {backgroundColor : housing? '#9c9c9c' : 'white'}
             }, {
               value : false,
               label : 'No',
               showSelectedCheck : true,
               style : {backgroundColor : housing? 'white' : '#9c9c9c'}
             }
           ]} 
          />
        </View>
        <View>
          <Text style = {styles.miniTitle}>{'\n'}USA Citizen</Text>
          <SegmentedButtons
           values = {citizen}
           onValueChange={handleCitizen}
           buttons = {[
             {
               value : true,
               label : 'Yes',
               style : {backgroundColor : citizen? '#9c9c9c' : 'white'}
             }, {
               value : false,
               label : 'No',
               showSelectedCheck : true,
               style : {backgroundColor : citizen? 'white' : '#9c9c9c'}
             }
           ]} 
          />
        </View>
        </View>  

        {/*Next button*/}
      	<Button mode="contained" style={styles.button} onPress = {handleNextPress}>
        	Next
      	</Button>
    </View>
  	</SafeAreaView>
	</PaperProvider>
    </ScrollView>
  );
}


