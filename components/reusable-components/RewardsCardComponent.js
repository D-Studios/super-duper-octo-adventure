import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Divider, Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import rewardsStyles from '../rewardsStyles';

const RewardsCardComponent = ({
  title,
  iconLibrary,
  iconName,
  availablePoints,
  availableLabel,
  pendingPoints,
  pendingLabel,
  benefits = [],
  onBenefitPress = () => {},
  buttonText,
  onRedeem
}) => {
  const iconSize = 40;
  const renderIcon = () => {
    switch (iconLibrary) {
      case 'AntDesign':
        return <AntDesign name={iconName} size={iconSize} style={styles.icon} />;
      case 'FontAwesome':
        return <FontAwesome name={iconName} size={iconSize} style={styles.icon} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={iconName} size={iconSize} style={styles.icon} />;
      case 'MaterialIcons':
        return <MaterialIcons name={iconName} size={iconSize} style={styles.icon} />;
      default:
        return null;
    }
  };

  return (
    <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
        <Card.Content style={rewardsStyles.cardMargins}>
          <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            {iconName && renderIcon()}
          </View>

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
                    <AntDesign name="right" size={24} style={{ marginLeft: 'auto' }} />
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
  };

export default RewardsCardComponent;
