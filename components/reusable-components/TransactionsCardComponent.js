import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { Card, Divider, Button } from 'react-native-paper';
import styles from './styles';
import transactionsStyles from '../transactionsStyles';

const TransactionsCardComponent = ({
  title,
  leftBigText,
  leftBigTextLabel,
  rightBigText,
  rightBigTextLabel,
  buttonText,
  onClick,
  autoPay,
  handleToggleAutoPay
}) => {
  return (
    <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
      <Card.Content style={transactionsStyles.cardMargins}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {(leftBigText || leftBigTextLabel) && (
          <View style={styles.row}>
            <View style={styles.column}>
              {leftBigText && (
                <Text style={transactionsStyles.unBoldedTitle}>
                  {leftBigText}
                  {leftBigText === 'Auto pay: ' && (
                    <Text
                      style={{
                        color: autoPay ? 'green' : 'red',
                      }}
                    >
                      {autoPay ? 'On' : 'Off'}
                    </Text>
                  )}
                  {/* {leftBigText === 'Auto pay: ' && (autoPay ? 'On' : 'Off')} */}
                </Text>
              )}
              {leftBigTextLabel && (
                <Text style={transactionsStyles.unBoldedMiniTitle}>{leftBigTextLabel}</Text>
              )}
            </View>
            <View style={[styles.column, transactionsStyles.rightAlignedText]}>
              {leftBigText === 'Auto pay: ' ? (
                <Switch
                style={{ transform: [{ scale: 1.5 }] }} // Scale the Switch to 1.5 times its original size
                  value={autoPay}
                  onValueChange={handleToggleAutoPay}
                  thumbColor={'rgba(103, 80, 164, 1)'} // Standard React Native Paper purple
                  trackColor={{
                    false: '#f44336', // Red for 'Off'
                    true: '#4caf50', // Green for 'On'
                  }}
                />
              ) : (
                rightBigText && (
                  <Text style={transactionsStyles.unBoldedTitle}>{rightBigText}</Text>
                )
              )}
              {rightBigTextLabel && (
                <TouchableOpacity onPress={onClick}>
                  <Text style={transactionsStyles.rightButtonLabel}>{rightBigTextLabel}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        <Divider style={transactionsStyles.divider} />
        <Button
          mode="text"
          style={transactionsStyles.button}
          labelStyle={transactionsStyles.buttonLabel}
          onPress={onClick}
        >
          {buttonText}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default TransactionsCardComponent;
