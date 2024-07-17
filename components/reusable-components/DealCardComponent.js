// DealCardComponent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import dealCardStyles from './dealCardStyles';

const DealCardComponent = ({ 
    imageUri, 
    regularText, 
    miniText, 
    isActivated }) => (
  <Card mode="elevated" style={[styles.boxContainer, { width: 175, marginRight: 12 }]}>
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
          color={isActivated ? "green" : "grey"}
          style={dealCardStyles.icon}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text style={dealCardStyles.buttonText}>{isActivated ? "Activated" : "Activate"}</Text>
        </TouchableOpacity>
      </View>
    </Card.Content>
  </Card>
);

export default DealCardComponent;
