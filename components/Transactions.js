import React, { useState } from 'react';
import { View, ScrollView, Image, Switch } from 'react-native';
import { Appbar, Text, Card, Button, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './reusable-components/styles';
import CreditCardImage from './reusable-components/CreditCardImage'
import constants from './reusable-components/GlobalConstants';
import TransactionsCardComponent from './reusable-components/TransactionsCardComponent';
import transactionsStyles from './transactionsStyles';

export default function Transactions() {
  const navigation = useNavigation();
  const [autoPay, setAutoPay] = useState(true);

  const handleToggleAutoPay = () => setAutoPay(!autoPay);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Portion */}
      <CreditCardImage 
        complex={true} 
        topPortion={constants.CREDIT_CARD_IMAGE_PORTION} 
        appBarText={'Transactions'} 
        showText={false}
      />

      {/* Bottom Portion */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
        <Text style={[transactionsStyles.centeredTitle, {paddingTop: 20 }]}>Transactions</Text>
          <View style={styles.cardContainer}>
            <TransactionsCardComponent
              title="Outstanding Balance"
              leftBigText="$2,456.05"
              leftBigTextLabel="$7,543.95 available credit"
              rightBigText=" "
              rightBigTextLabel="Increase Credit Limit"
              buttonText="More Details"
              onClick={() => { /* Action */ }}
            />

            <Button mode="contained" style={styles.button} onPress={() => { navigation.navigate('MakePayment') }}>
              Make Payment
            </Button>

            <TransactionsCardComponent
              title="Your last statement balance is scheduled for auto pay on July 15, 2023"
              leftBigText="Auto pay: "
              buttonText="Manage"
              autoPay={autoPay}
              handleToggleAutoPay={handleToggleAutoPay}
              onClick={() => { /* Action */ }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}