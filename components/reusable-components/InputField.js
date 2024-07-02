import styles from '../styles';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    {value !== '' && (
      <TouchableOpacity style={styles.clearButton} onPress={onClear}>
        <Icon name="close" size={20} color="gray" />
      </TouchableOpacity>
    )}
  </View>
);

export default InputField;
