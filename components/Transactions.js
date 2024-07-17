import React, { useState } from 'react';
import { View, ScrollView, Image, Switch } from 'react-native';
import { Appbar, Text, Card, Button, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './reusable-components/styles';
import CreditCardImage from './reusable-components/CreditCardImage'

export default function Transactions() {
  const navigation = useNavigation();
  
  const [autoPay, setAutoPay] = useState(true);

  const handlePreviousPress = () => {
    navigation.navigate('Confirm');
  };

  const handleToggleAutoPay = () => setAutoPay(!autoPay);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
      <CreditCardImage 
                    complex = {true} 
                    topPortion = {0.25} appBarText = {'Rewards'} 
                    showText={false}>
                </CreditCardImage>
        {/* <Appbar.Header>
          <Appbar.BackAction onPress={handlePreviousPress} />
          <Appbar.Content title="Delta Inc." />
        </Appbar.Header>

        <View style={styles.topPane}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.creditCardTitle}>Delta Inc. Credit Card.....1234</Text>
          </View>
          <Image
            source={{ uri: 'https://t4.ftcdn.net/jpg/03/27/87/41/360_F_327874197_zaMWlrLxEw8sbjn4jnVsmqu3K3ZB1Jur.jpg' }}
            style={styles.creditCardImage}
          />
        </View> */}

        <View style={styles.content}>
          <Card mode="elevated" style={styles.boxContainer}>
            <Text style={styles.balanceTitle}>Outstanding Balance</Text>
            <Text style={styles.balanceAmount}>$2,456.05</Text>
            <Text style={styles.availableCredit}>$7,543.95 available credit</Text>
            <Text style={styles.increaseCredit}>Increase Credit Limit</Text>
            <Divider style={styles.divider} />
            <Button mode="contained" style={styles.button} onPress={() => { navigation.navigate('MoreDetails') }}>
              More details
            </Button>
            <Button mode="contained" style={styles.button} onPress={() => { navigation.navigate('MakePayment') }}>
              Make Payment
            </Button>
          </Card>

          <Card mode="elevated" style={styles.boxContainer}>
            <Text style={styles.statementText}>
              Your last statement balance is scheduled for auto pay on July 15, 2023
            </Text>
            <View style={styles.row}>
              <Text style={styles.autoPayText}>Auto pay: {autoPay ? 'On' : 'Off'}</Text>
              <Switch value={autoPay} onValueChange={handleToggleAutoPay} />
            </View>
          </Card>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
