import React, { useState, useCallback } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Menu, Divider, IconButton, List, Appbar, Text, Card, ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './reusable-components/styles';
import CreditCardImage from './CreditCardImage';
import WalletManager from 'react-native-wallet-manager';
import { AddToWalletButton, openPaymentSetup } from 'react-native-add-wallet';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

export default function Approved() {

  const navigation = useNavigation();

  // Previous screen.
  const handlePreviousPress = useCallback(() => {
    navigation.navigate('Confirm');
  }, [navigation]);

  const [cardHolderAgreement, setCardHolderAgreement] = useState(false);
  const [privacyNotice, setPrivacyNotice] = useState(false);
  const [rewardsAgreement, setRewardsAgreement] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [iconButtonPosition, setIconButtonPosition] = useState(null);
  const X_OFFSET = 10;
  const Y_OFFSET = 50;
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleCardHolderAgreement = () => setCardHolderAgreement(!cardHolderAgreement);
  const handlePrivacyNotice = () => setPrivacyNotice(!privacyNotice);
  const handleRewardsAgreement = () => setRewardsAgreement(!rewardsAgreement);

  const measureIconButton = (event) => {
    event.target.measureInWindow((x, y, width, height) => {
      setIconButtonPosition({ x, y, width, height });
      openMenu();
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Appbar.Header>
            {/* This is the back button */}
            <Appbar.BackAction onPress={handlePreviousPress} />
            {/* This is the title */}
            <Appbar.Content title="Approved" />
          </Appbar.Header>

          {/* Progress bar. */}
          <ProgressBar progress={1} style={styles.progressBar} />

          <View style={styles.content}>
          {/*Creating box*/}
          <Card mode='elevated' style={styles.boxContainer}>
             {/*Three dots menu on upper right corner of box*/}
              <IconButton
                icon="dots-vertical"
                onPress={(event) => measureIconButton(event)}
                size={24}
                style={styles.top_right}
              />
              {iconButtonPosition && (
                <Menu
                  visible={menuVisible}
                  onDismiss={closeMenu}
                  anchor={{ x: iconButtonPosition.x + X_OFFSET, y: iconButtonPosition.y + iconButtonPosition.height + Y_OFFSET }}
                >
                  <Menu.Item onPress={() => navigation.navigate("CreditCardInformation")} title="Credit Card Information" />
                  <Menu.Item onPress={() => navigation.navigate("Rewards")} title="Rewards" />
                  <Divider />
                  <Menu.Item onPress={() => navigation.navigate("Transactions")} title="Transactions" />
                </Menu>
              )}
              {/*Approved text*/}
              <Text style={styles.centeredTitle}>You are Approved{'\n'}</Text>
              {/*Credit card image*/}
              <CreditCardImage complex={false}></CreditCardImage>
              {/*Credit card attribute descriptions*/}
              <View style={styles.row}>
                <Text style={styles.title}>16 %</Text>
                <Text style={[styles.rightAlignedText, styles.title]}>$10.000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.miniTitle}>Purchase APR</Text>
                <Text style={[styles.rightAlignedText, styles.miniTitle]}>Credit Limit</Text>
              </View>
              {/*Placeholder text*/}
              <TouchableOpacity
                  onPress={async () => {
                    // Verify user credentials before asking them to enable Face ID
                    const {userId} = await verifyUserCredentials();

                    const rnBiometrics = new ReactNativeBiometrics();
                    
                    const { available, biometryType } =
                      await rnBiometrics.isSensorAvailable();
                    
                    if (available && biometryType === BiometryTypes.FaceID) {
                      Alert.alert(
                        'Face ID',
                        'Would you like to enable Face ID authentication for the next time?',
                        [
                          {
                            text: 'Yes please',
                            onPress: async () => {
                              const { publicKey } = await rnBiometrics.createKeys();

                              // `publicKey` has to be saved on the user's entity in the database
                              await sendPublicKeyToServer({ userId, publicKey });

                              // save `userId` in the local storage to use it during Face ID authentication
                              await AsyncStorage.setItem('userId', userId);
                            },
                          },
                          { text: 'Cancel', style: 'cancel' },
                        ],
                      );
                    }
  }}>
  <View style={styles.btn}>
    <Text style={styles.btnText}>Sign in</Text>
  </View>
</TouchableOpacity>
              <Text>
                Lorem ipsum dolor sit amet, consectetur{'\n'}
                adipiscing elit, sed do eiusmod tempor
              </Text>

              
              {/* <AddToWalletButton onPress = {openPaymentSetup}/> */}

            </Card>
            
            {/*Dropdown menu for Card Holder Agreement*/}
            <View style={styles.container}>
              <List.Section>
                <List.Accordion
                  title="Card Holder Agreement"
                  expanded={cardHolderAgreement}
                  onPress={handleCardHolderAgreement}
                >
                  <List.Item title="This is some expandable text 1." />
                </List.Accordion>
              </List.Section>
            </View>
            
            {/*Dropdown menu for Privacy Notice*/}
            <View style={styles.container}>
              <List.Section>
                <List.Accordion
                  title="Privacy Notice"
                  expanded={privacyNotice}
                  onPress={handlePrivacyNotice}
                >
                  <List.Item title="This is some expandable text 2." />
                </List.Accordion>
              </List.Section>
            </View>

            {/*Dropdown menu for Rewards Agreement*/}
            <View style={styles.container}>
              <List.Section>
                <List.Accordion
                  title="Rewards Agreement"
                  expanded={rewardsAgreement}
                  onPress={handleRewardsAgreement}
                >
                  <List.Item title="This is some expandable text 3." />
                </List.Accordion>
              </List.Section>
            </View>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </ScrollView>
  );
}
