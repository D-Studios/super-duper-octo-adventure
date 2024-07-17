// DealCardComponent.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import dealCardStyles from './dealCardStyles';

const DealCardComponent = ({ 
    imageUri, 
    regularText, 
    miniText, 
    isActivated }) => (
  <Card mode="elevated" style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
    <Card.Content>
      <Image
        source={{ uri: imageUri }}
        style={dealCardStyles.image}
      />
      <Text style={dealCardStyles.regularText}>{regularText}</Text>
      <Text style={dealCardStyles.miniText}>{miniText}</Text>
      <View style={dealCardStyles.buttonContainer}>
        <Icon
          name={isActivated ? "check-circle" : "info-circle"}
          size={20}
          color={isActivated ? "green" : "blue"}
          style={dealCardStyles.icon}
        />
        <Button mode="contained" onPress={() => { /* Handle button press */ }} style={dealCardStyles.button}>
          {isActivated ? "Activated" : "Activate"}
        </Button>
      </View>
    </Card.Content>
  </Card>
);

export default DealCardComponent;
