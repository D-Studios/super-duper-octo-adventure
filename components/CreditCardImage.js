import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './reusable-components/styles';

const CreditCardImage = ({ complex, topPortion, appBarText, showText, company, details }) => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const topHeight = screenHeight * topPortion;
    const navigation = useNavigation();

    const handlePreviousPress = () => {
        navigation.goBack();
    };

    return (
        <View>
            {complex && (
                <Appbar.Header>
                    <Appbar.BackAction onPress={handlePreviousPress} />
                    <Appbar.Content title={appBarText} />
                </Appbar.Header>
            )}
            <View style={[styles.creditCardBackground, complex ? { height: topHeight, width: screenWidth, justifyContent: 'center', alignItems: 'center'} : {}]}>
                {showText && complex && (
                    <View>
                        <Text style={[styles.miniTitle, styles.content]}>{company}</Text>
                        <Text style={[styles.title, styles.content]}>{details}</Text>
                    </View>
                )}
                <Image
                    source={{ uri: 'https://cdn-icons-png.freepik.com/512/9334/9334539.png'}}
                    style={styles.centeredImage}
                    accessibilityLabel="Credit card image"
                />
            </View>
        </View>
    );
};

export default CreditCardImage;
