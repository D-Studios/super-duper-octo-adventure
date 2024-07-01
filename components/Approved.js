import React, { useState, useCallback } from 'react';
import {View, Image, ScrollView} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SegmentedControl } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { ToggleButton } from 'react-native-paper';
import SegmentedControlTab from "react-native-segmented-control-tab";

import {
  Provider as PaperProvider,
  Appbar,
  Text,
  TextInput,
  Button,
  ProgressBar,
} from 'react-native-paper';

import Slider from '@react-native-community/slider';

import { SafeAreaView } from 'react-native';


export default function Approved() {

   const navigation = useNavigation();

   //Previous screen.
   const handlePreviousPress = useCallback(() => {
       navigation.navigate('Confirm'); 
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
      	<Appbar.Content title="Approved" />
    	</Appbar.Header>

    	{/*Progress bar.*/}
    	<ProgressBar progress={1} style={styles.progressBar} />  

    	<View style={styles.content}>

        <View style = {styles.boxContainer}>
        <Text style = {styles.centeredTitle}>You are Approved{'\n'}</Text>
        <Image  
        source={{ uri: 'https://t4.ftcdn.net/jpg/03/27/87/41/360_F_327874197_zaMWlrLxEw8sbjn4jnVsmqu3K3ZB1Jur.jpg' }}
        style={styles.centeredImage}/>
        
        <View style = {styles.row}>
        <Text style = {styles.title}> 16 %</Text> 
        <Text style = {[styles.rightAlignedText, styles.title]} > $10.000 </Text>
        </View>
        <View style = {styles.row}>
        <Text style = {styles.miniTitle}> Purchase APR </Text>
        <Text style = {[styles.rightAlignedText, styles.miniTitle]}> Credit Limit </Text> 
        </View>

        <Text>Lorem ipsum dolor sit amet, consectetur{'\n'}
        adipiscing elit, sed do eiusmod tempor</Text>

        </View>
     
    </View>
  	</SafeAreaView>
	</PaperProvider>
    </ScrollView>
  );
}


