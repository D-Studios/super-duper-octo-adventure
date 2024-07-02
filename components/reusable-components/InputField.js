import styles from '../styles';
import React from 'react';
import {View} from 'react-native';
import {
  Provider as PaperProvider,
  TextInput,
  Button,
} from 'react-native-paper';

const InputField = ({ label, value, onChangeText, keyboardType, maxLength, placeholder, onClear }) => (
    <View style={styles.inputContainer}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <Button icon="close" onPress={onClear} />
    </View>
  );
  export default InputField;
  