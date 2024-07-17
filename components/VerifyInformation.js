import React, { useState, useCallback } from 'react';
import { View, Linking, TouchableOpacity, Alert, Image } from 'react-native';
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
import { sendOtp } from './twilio';
import * as ImagePicker from 'expo-image-picker';

export default function VerifyInformation() {
  const navigation = useNavigation();

  const [formattedPhone, setFormattedPhone] = useState(constants.EMPTY_STRING);
  const [unformattedPhone, setUnformattedPhone] = useState(constants.EMPTY_STRING);
  const [ssn, setSsn] = useState(constants.EMPTY_STRING);
  const [secondaryId, setSecondaryId] = useState(null);

  const clearPhone = () => {
    setFormattedPhone(constants.EMPTY_STRING);
    setUnformattedPhone(constants.EMPTY_STRING);
  };

  const clearSsn = () => setSsn(constants.EMPTY_STRING);

  const handlePhoneChange = (text) => {
    setFormattedPhone(formatInputBox(text, constants.PHONE_NUMBER_LENGTH, constants.HYPHEN, constants.PHONE_HYPHEN_FIRST_POS, constants.PHONE_HYPHEN_SECOND_POS));
    setUnformattedPhone(text.replace(/-/g, '')); // Remove hyphens from phone number
  };

  const handleSsnChange = (text) => {
    setSsn(formatInputBox(text, constants.SSN_LENGTH, constants.HYPHEN, constants.NO_VISIBLE_HYPHEN, constants.NO_VISIBLE_HYPHEN));
  };

  const handlePrivacyPolicy = async () => {
    const url = 'https://www.yahoo.com';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  const handleNextPress = useCallback(async () => {
    try {
      await sendOtp(unformattedPhone);
      Alert.alert('Success', 'OTP sent successfully');
      navigation.navigate('OTP', { phoneNumber: unformattedPhone });
    } catch (error) {
      Alert.alert('Error', `Failed to send OTP to ${unformattedPhone}. Error: ${error.message}`);
    }
  }, [unformattedPhone, navigation]);

  const handleAddSecondaryId = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log("Camera permission status:", status);  // Debug statement
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera access is required to take a photo');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Camera result:", result);  // Debug statement

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setSecondaryId({ uri });
      console.log("Secondary ID set to:", uri);  // Debug statement
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.navigate('PreviousScreen')} />
          <Appbar.Content title="Verify and Pre-fill Application" />
        </Appbar.Header>

        <ProgressBar progress={0} style={styles.progressBar} />

        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Mobile Phone Number"
              value={formattedPhone}
              onChangeText={handlePhoneChange}
              style={styles.input}
              keyboardType="numeric"
              maxLength={constants.PHONE_MAX_LENGTH}
              placeholder={constants.DEFAULT_PHONE}
            />
            {formattedPhone !== constants.EMPTY_STRING && (
              <TouchableOpacity style={styles.clearButton} onPress={clearPhone}>
                <Icon name="close" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.inputContainer}>
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

          <Button mode="contained" style={styles.button} onPress={handleNextPress}>
            Next
          </Button>

          <Button mode="contained" style={styles.button} onPress={handleAddSecondaryId}>
            Add Secondary ID
          </Button>

          {secondaryId && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: secondaryId.uri }} style={styles.image} />
              {console.log("Rendering image with URI:", secondaryId.uri)}
            </View>
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
