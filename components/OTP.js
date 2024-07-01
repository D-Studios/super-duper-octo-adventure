import React, { useState, useCallback } from 'react';
import {View} from 'react-native';
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

export default function OTP() {

   const navigation = useNavigation();

   //Previous screen.
   const handlePreviousPress = useCallback(() => {
       navigation.navigate('VerifyInformation'); 
    }, [navigation]);

   //Next screen
   const handleNextPress = useCallback(() => {
      navigation.navigate('Confirm'); 
   }, [navigation]);

  const EMPTY_STRING = ''; 
  const [otp, setOTP] = useState(EMPTY_STRING);
  //Clear OTP entered.
  const clearOTP = () => setOTP(EMPTY_STRING);

  const handleOTPChange = (text) => {
	setOTP(text);
  };

  return (
	<PaperProvider>
  	<SafeAreaView style={styles.container}>
    	<Appbar.Header>
      	{/*This is the back button*/}
      	<Appbar.BackAction onPress={handlePreviousPress} />
      	{/*This is the title*/}
      	<Appbar.Content title="Enter Verification Code" />
    	</Appbar.Header>

    	{/*Progress bar.*/}
    	<ProgressBar progress={0.33} style={styles.progressBar} />  

        <View style={styles.content}>
        <Text>Please enter the code sent to your{'\n'}mobile phone number.{'\n'}</Text>
        </View>


    	{/*Input for OTP*/}
    	<View style={styles.content}>
      	<View style={styles.inputContainer}>
        	<TextInput
          	label="Verification Code"
          	value={otp}
          	style={styles.input}
          	keyboardType="numeric"
            placeholder={EMPTY_STRING}                   
            onChangeText={handleOTPChange}
        	/> 
        	{/*Clear number*/}
        	<Button icon="close" onPress={clearOTP} />
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


