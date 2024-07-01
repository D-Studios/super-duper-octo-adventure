import React, { useState, useCallback } from 'react';
import {View, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import {
  Provider as PaperProvider,
  Appbar,
  Text,
  TextInput,
  Button,
  ProgressBar,
} from 'react-native-paper';

import { SafeAreaView } from 'react-native';

export default function VerifyInformation() {

    const navigation = useNavigation();

   //Previous screen.
   const handlePreviousPress = useCallback(() => {
       navigation.navigate('VerifyInformation'); 
    }, [navigation]);

   //Next screen.
   const handleNextPress = useCallback(() => {
      navigation.navigate('OTP'); 
   }, [navigation]);

   //Privacy Polcy.
   const handlePrivacyPolicy = async() => { 
      const url = 'https://www.yahoo.com'; 
	  const supported = await Linking.canOpenURL(url);
  
	   if (supported) {
	      await Linking.openURL(url);
	    }
   };

  const EMPTY_STRING = '';
  const [phone, setPhone] = useState(EMPTY_STRING);
  const [ssn, setSsn] = useState(EMPTY_STRING);

  const ONLY_DIGITS = /[^\d]/g;
  const PHONE_NUMBER_LENGTH = 10;
  const PHONE_HYPHEN_FIRST_POS = 3;
  const PHONE_HYPHEN_SECOND_POS = 6;
  const SSN_HYPHEN_FIRST_POS = 3;
  const SSN_HYPHEN_SECOND_POS = 5;
  const HYPHEN = '-';
  const SSN_LENGTH = 9;
  const PHONE_MAX_LENGTH = 20; // Adjusted to account for '-' characters
  const SSN_MAX_LENGTH = 18; // Adjusted to account for '-' characters

  const clearPhone = () => setPhone(EMPTY_STRING);
  const clearSsn = () => setSsn(EMPTY_STRING);

  const inputBoxHelper = (text, length, hyphenFirstPos, hyphenSecondPos) => {
 	//Get only the digits entered.
 	const formattedText = text.replace(ONLY_DIGITS, EMPTY_STRING);
 	let formattedOutput = EMPTY_STRING;

 	//Loop through all the digits, adding hyphens where appropiate.
 	for(let i = 0; i < formattedText.length && i < length; i++){
   	if(i==hyphenFirstPos || i == hyphenSecondPos){
     	formattedOutput += HYPHEN;
   	}
   	formattedOutput += formattedText[i];
 	}
 	return formattedOutput;
  }

  const handlePhoneChange = (text) => {
	setPhone(inputBoxHelper(text, PHONE_NUMBER_LENGTH, PHONE_HYPHEN_FIRST_POS, PHONE_HYPHEN_SECOND_POS));
  };

  const handleSsnChange = (text) => {
	setSsn(inputBoxHelper(text, SSN_LENGTH, SSN_HYPHEN_FIRST_POS, SSN_HYPHEN_SECOND_POS));
  };

  return (
	<PaperProvider>
  	<SafeAreaView style={styles.container}>
    	<Appbar.Header>
      	{/*This is the back button*/}
      	<Appbar.BackAction onPress={handlePreviousPress} />
      	{/*This is the title*/}
      	<Appbar.Content title="Verify and Pre-fill Application" />
    	</Appbar.Header>

    	{/*Progress bar.*/}
    	<ProgressBar progress={0} style={styles.progressBar} />  


    	{/*Input for phone number*/}
    	<View style={styles.content}>
      	<View style={styles.inputContainer}>
        	<TextInput
          	label="Mobile Phone Number"
          	value={phone}
          	onChangeText={handlePhoneChange}
          	style={styles.input}
          	keyboardType="numeric"
          	maxLength={PHONE_MAX_LENGTH}
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear phone number*/}
        	<Button icon="close" onPress={clearPhone} />
      	</View>

        <View style={styles.content}>
      	<Text>We ask for your Social Security number of Individual Tax Identification Number (ITIN) to{'\n'}
		help prefill your information in this application process, verify your identity, and obtain your{'\n'}
		credit history for processing your application.</Text>
        </View>
     	 
       	{/*Input for SSN*/}
      	<View style={styles.inputContainer}>
        	<TextInput
          	label="Social Security Number"
          	value={ssn}
			onChangeText={handleSsnChange}
          	style={styles.input}
          	keyboardType="numeric"
          	maxLength={SSN_MAX_LENGTH}
          	placeholder={EMPTY_STRING}
        	/>
        	{/*Clear SSN*/}
        	<Button icon="close" onPress={clearSsn} />
      	</View>

        <View style={styles.content}>
      	<Text>By providing your number, you agree to receive a one-time text message from Wells Fargo{'\n'}
		with a link to verify your identity. Message and data rates may apply.{'\n'}
		You authorize your wireless carrier to use or disclose information about your account and{'\n'}
		your wireless device, if available, to Wells Fargo, its Affiliates, or its service provider for the{'\n'}
		duration of your buisness relationship, solely to help them identify you or your wireless{'\n'}
		device and to prevent fraud. See our <Text style = {styles.url} onPress={handlePrivacyPolicy}>Privacy Policy</Text> for how we treat your data.{'\n'}
		</Text>
        </View>

       	{/*Next button*/}
      	<Button mode="contained" style={styles.button} onPress = {handleNextPress}>
        	Next
      	</Button>
    	</View>
  	</SafeAreaView>
	</PaperProvider>
  );
}


