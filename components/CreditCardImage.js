import React from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import { Appbar, Text, Card, Button, Divider, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './reusable-components/styles';
import rewardsStyles from './rewardsStyles';

const CreditCardImage = ({topPortion, appBarText, showText, company, details}) => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const topHeight = screenHeight * topPortion;
    const navigation = useNavigation();

    const handlePreviousPress = () => {
        navigation.goBack();
    };

    return (
        <View>
            <Appbar.Header>
            <Appbar.BackAction onPress={handlePreviousPress} />
            <Appbar.Content title={appBarText}/>
            </Appbar.Header>
            <View style={[styles.creditCardBackground, { height: topHeight, width: screenWidth }]}>
            {showText && (
            <View>
            <Text style = {[styles.miniTitle, styles.content]}>{company}</Text>
            <Text style = {[styles.title, styles.content]}>{details}</Text>
            </View>
            )
         }
        <Image
    source={{ uri: 'https://t4.ftcdn.net/jpg/03/27/87/41/360_F_327874197_zaMWlrLxEw8sbjn4jnVsmqu3K3ZB1Jur.jpg' }}
    style={styles.centeredImage}
        /> 
        </View> 
        </View>
    )
}

export default CreditCardImage;