import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Text, RadioButton, Button, Card, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './reusable-components/styles';

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
            <Card mode="elevated" style={styles.boxContainer}>
              <Text style={styles.balanceTitle}>Payment Method</Text>
              <Text style={styles.paymentMethod}>Sample Bank Checking</Text>
              <Text style={styles.paymentMethodDetails}>Ending in.....3421</Text>
              <Button mode="outlined" onPress={() => {}}>Change Payment Method</Button>
            </Card>

            <Card mode="elevated" style={styles.boxContainer}>
              <Text style={styles.balanceTitle}>Payment Amount</Text>
              <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                <RadioButton.Item label="Statement Balance $2,456.05" value="statement" />
                <RadioButton.Item label="Total Minimum Balance $1,456.05" value="minimum" />
                <RadioButton.Item label="Last Statement Balance $1,895.76" value="last" />
                <RadioButton.Item label="Other" value="other" />
              </RadioButton.Group>
            </Card>

            <Card mode="elevated" style={styles.boxContainer}>
              <Text style={styles.balanceTitle}>Deliver by</Text>
              <Text style={styles.paymentMethod}>July 10, 2023</Text>
              <Text style={styles.paymentMethodDetails}>Earlier delivery by July 10, 2023</Text>
              <Button mode="outlined" onPress={() => {}}>Change delivery date</Button>
            </Card>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </ScrollView>
  );
}
