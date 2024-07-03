import React, { useState, useCallback } from 'react';
import { View, Image, ScrollView, findNodeHandle } from 'react-native';
import { Menu, Divider, IconButton, List, Appbar, Text, Card, ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './reusable-components/styles';

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
          <Card mode = 'elevated' style = {styles.boxContainer}>
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
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
              )}
              <Text style={styles.centeredTitle}>You are Approved{'\n'}</Text>
              <Image
                source={{ uri: 'https://t4.ftcdn.net/jpg/03/27/87/41/360_F_327874197_zaMWlrLxEw8sbjn4jnVsmqu3K3ZB1Jur.jpg' }}
                style={styles.centeredImage}
              />
              <View style={styles.row}>
                <Text style={styles.title}>16 %</Text>
                <Text style={[styles.rightAlignedText, styles.title]}>$10.000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.miniTitle}>Purchase APR</Text>
                <Text style={[styles.rightAlignedText, styles.miniTitle]}>Credit Limit</Text>
              </View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur{'\n'}
                adipiscing elit, sed do eiusmod tempor
              </Text>
            </Card>

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
