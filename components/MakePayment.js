import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Text, RadioButton, Button, Card, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './reusable-components/styles';
import transactionsStyles from './transactionsStyles';
import TransactionsCardComponent from './reusable-components/TransactionsCardComponent';


export default function MakePayment() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('statement');

  const handlePreviousPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Appbar.Header>
            <Appbar.BackAction onPress={handlePreviousPress} />
            <Appbar.Content title="Delta Inc." />
          </Appbar.Header>

          <View style={styles.content}>
            <TransactionsCardComponent
              title="Payment Method"
              leftBigText="Sample Checking"
              leftBigTextLabel="Ending in.....3421"
              buttonText="Change Payment Method"
              onClick={() => { /* Action */ }}
            />

            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
              <Card.Content style={transactionsStyles.cardMargins}>
                <Text style={styles.title}>Payment Amount</Text>
                <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                  <View style={styles.radioButtonItem}>
                    <RadioButton value="statement" />
                    <Text style={styles.label}>Statement Balance</Text>
                    <Text style={styles.amount}>$2,456.05</Text>
                  </View>
                  <View style={styles.radioButtonItem}>
                    <RadioButton value="minimum" />
                    <Text style={styles.label}>Total Minimum Balance</Text>
                    <Text style={styles.amount}>$1,456.05</Text>
                  </View>
                  <View style={styles.radioButtonItem}>
                    <RadioButton value="last" />
                    <Text style={styles.label}>Last Statement Balance</Text>
                    <Text style={styles.amount}>$1,895.76</Text>
                  </View>
                  <View style={styles.radioButtonItem}>
                    <RadioButton value="other" />
                    <Text style={styles.label}>Other</Text>
                  </View>
                </RadioButton.Group>
              </Card.Content>
            </Card>

            <TransactionsCardComponent
              title="Deliver by"
              leftBigText="July 10, 2023"
              leftBigTextLabel="Earlier delivery by July 10, 2023"
              buttonText="Change delivery date"
              onClick={() => { /* Action */ }}
            />

          </View>
        </SafeAreaView>
      </PaperProvider>
    </ScrollView>
  );
}
