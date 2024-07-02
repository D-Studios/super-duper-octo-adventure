import React, { useState, useCallback } from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Menu, Divider, Provider, IconButton, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { SegmentedControl } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';
import { ToggleButton } from 'react-native-paper';
import SegmentedControlTab from "react-native-segmented-control-tab";

import {
  Provider as PaperProvider,
  List,
  Appbar,
  Text,
  TextInput,
  Button,
  ProgressBar,
} from 'react-native-paper';

import Slider from '@react-native-community/slider';

import { SafeAreaView } from 'react-native';


export default function Approved() {

   const navigation = useNavigation();

   //Previous screen.
   const handlePreviousPress = useCallback(() => {
       navigation.navigate('Confirm'); 
    }, [navigation]);

  const EMPTY_STRING = ''; 
  const [cardHolderAgreement, setCardHolderAgreement] = useState(false);
  const [privacyNotice, setPrivacyNotice] = useState(false);
  const [rewardsAgreement, setRewardsAgreement] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    console.log("Opened menu");
    setMenuVisible(true);
  }
  const closeMenu = () => {
    console.log("Closed menu"); 
    setMenuVisible(false);
  }

  const handleCardHolderAgreement = () => {
    //console.log(cardHolderAgreement);
    setCardHolderAgreement(!cardHolderAgreement);
  }

  const handlePrivacyNotice = () => {
    setPrivacyNotice(!privacyNotice);
  }

  const handleRewardsAgreement = () => {
    setRewardsAgreement(!rewardsAgreement);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
	<PaperProvider>
  	<SafeAreaView style={styles.container}>
    	<Appbar.Header>
      	{/*This is the back button*/}
      	<Appbar.BackAction onPress={handlePreviousPress} />
      	{/*This is the title*/}
      	<Appbar.Content title="Approved" />
    	</Appbar.Header>

    	{/*Progress bar.*/}
    	<ProgressBar progress={1} style={styles.progressBar} />  

    	<View style={styles.content}>

        <View style = {styles.boxContainer}>
{/* 
          <Menu 
          visible = {true}
          onDismiss = {closeMenu}
          anchor={<IconButton icon = "dots-vertical" size={24} style = {styles.top_right} onPress = {openMenu}></IconButton>}>
         <Menu.Item onPress = {() => {}} title = "Item 1" /> 
         <Menu.Item onPress = {() => {}} title = "Item 2" /> 
         <Divider /> 
        <Menu.Item onPress = {() => {}} title = "Item 3" />
        </Menu>
        <Text style = {styles.centeredTitle}>You are Approved{'\n'}</Text> */}
        <Image  
        source={{ uri: 'https://t4.ftcdn.net/jpg/03/27/87/41/360_F_327874197_zaMWlrLxEw8sbjn4jnVsmqu3K3ZB1Jur.jpg' }}
        style={styles.centeredImage}/> 
         
        <View style = {styles.row}>
        <Text style = {styles.title}> 16 %</Text> 
        <Text style = {[styles.rightAlignedText, styles.title]} > $10.000 </Text>
        </View>
        <View style = {styles.row}>
        <Text style = {styles.miniTitle}> Purchase APR </Text>
        <Text style = {[styles.rightAlignedText, styles.miniTitle]}> Credit Limit </Text> 
        </View>

        <Text>Lorem ipsum dolor sit amet, consectetur{'\n'}
        adipiscing elit, sed do eiusmod tempor</Text>
        </View>

        <View style = {styles.container}>
        <List.Section>
          <List.Accordion
            title="Card Holder Agreement"
            expanded={cardHolderAgreement}
            onPress={handleCardHolderAgreement}> 
            <List.Item title= "This is some expandable text 1." />
          </List.Accordion>
          </List.Section>
        </View>

        <View style = {styles.container}>
        <List.Section>
          <List.Accordion
            title="Privacy Notice"
            expanded={privacyNotice}
            onPress={handlePrivacyNotice}> 
            <List.Item title= "This is some expandable text 2." />
          </List.Accordion>
          </List.Section>
        </View>

        <View style = {styles.container}>
        <List.Section>
          <List.Accordion
            title="Rewards Agreement"
            expanded={rewardsAgreement}
            onPress={handleRewardsAgreement}> 
            <List.Item title= "This is some expandable text 3." />
          </List.Accordion>
          </List.Section>
        </View>
    </View>
  	</SafeAreaView>
	</PaperProvider>
    </ScrollView>
  );
}


