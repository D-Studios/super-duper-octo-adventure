import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Divider, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'; 
import styles from './styles';
import rewardsStyles from '../rewardsStyles';

const RewardsCardComponent = ({
  title,
  availablePoints,
  availableLabel,
  pendingPoints,
  pendingLabel,
  benefits = [],
  onBenefitPress = () => {},
  buttonText,
  onRedeem
}) => (
  <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
    <Card.Content style={rewardsStyles.cardMargins}>
      <Text style={styles.title}>{title}</Text>

      {/* Conditional rendering for available points and labels */}
      {(availablePoints || availableLabel) && (
        <View style={styles.row}>
          <View style={styles.column}>
            {availablePoints && (
              <Text style={rewardsStyles.unBoldedTitle}>{availablePoints}</Text>
            )}
            {availableLabel && (
              <Text style={rewardsStyles.unBoldedMiniTitle}>{availableLabel}</Text>
            )}
          </View>
          <View style={[styles.column, rewardsStyles.rightAlignedText]}>
            {pendingPoints && (
              <Text style={rewardsStyles.unBoldedTitle}>{pendingPoints}</Text>
            )}
            {pendingLabel && (
              <Text style={rewardsStyles.unBoldedMiniTitle}>{pendingLabel}</Text>
            )}
          </View>
        </View>
      )}

      {/* Conditional rendering for benefits list */}
      {benefits.length > 0 && (
        <>
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity onPress={() => onBenefitPress(benefit)} style={styles.listRow}>
                <Text style={rewardsStyles.list}>{benefit}</Text>
                <Icon name="right" size={24} style={{ marginLeft: 'auto' }} />
              </TouchableOpacity>
              {index < benefits.length - 1 && <Divider style={styles.divider} />}
            </React.Fragment>
          ))}
        </>
      )}

      <Divider style={rewardsStyles.divider} />
      <Button
        mode="text"
        style={rewardsStyles.button}
        labelStyle={rewardsStyles.buttonLabel}
        onPress={onRedeem}
      >
        {buttonText}
      </Button>
    </Card.Content>
  </Card>
);

export default RewardsCardComponent;
