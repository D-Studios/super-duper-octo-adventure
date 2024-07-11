import React, {useCallback} from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Card, Text, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './reusable-components/styles';

export default function Rewards() {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const TOP_PORTION = 0.25;
    const FULL_SCREEN = 1;
    const topHeight = screenHeight * TOP_PORTION;
    const bottomHeight = screenHeight * (FULL_SCREEN - TOP_PORTION);

    // Previous screen.
    const navigation = useNavigation();
    const handlePreviousPress = useCallback(() => {
        navigation.navigate('Approved');
    }, [navigation]);

    return (
        <PaperProvider style={styles.fullScreen}>
            <SafeAreaView style={[styles.fullScreen, styles.container]}>
                <Appbar.Header>
                    {/* This is the back button */}
                    <Appbar.BackAction onPress={handlePreviousPress} />
                    {/* This is the title */}
                    <Appbar.Content title="Rewards" />
                </Appbar.Header>

                <View style={[styles.creditCardBackground, { height: topHeight, width: screenWidth }]}>
                    {/* Top Portion Content */}
                </View>
                <View style={[styles.fullWidth, { height: bottomHeight }]}>
                    <Text style={styles.centeredTitle}>Rewards & Benefits</Text>
                    <ScrollView contentContainerStyle={styles.content}>
                        {/* Four Cards vertically stacked */}
                        <Card mode='elevated' style={[styles.boxContainer, styles.fullWidth, { marginBottom: 16 }]}>
                            <Card.Content>
                                <Text>Card 1</Text>
                            </Card.Content>
                        </Card>
                        <Card mode='elevated' style={[styles.boxContainer, styles.fullWidth, { marginBottom: 16 }]}>
                            <Card.Content>
                                <Text>Card 2</Text>
                            </Card.Content>
                        </Card>
                        <Card mode='elevated' style={[styles.boxContainer, styles.fullWidth, { marginBottom: 16 }]}>
                            <Card.Content>
                                <Text>Card 3</Text>
                            </Card.Content>
                        </Card>
                        <Card mode='elevated' style={[styles.boxContainer, styles.fullWidth, { marginBottom: 16 }]}>
                            <Card.Content>
                                <Text>Card 4</Text>
                            </Card.Content>
                        </Card>
                        {/* Horizontal Scroll of Individual Cards */}
                        <ScrollView horizontal={true} style={styles.fullWidth} contentContainerStyle={{ padding: 16 }}>
                            <Card mode='elevated' style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
                                <Card.Content>
                                    <Text>Individual Card 1</Text>
                                </Card.Content>
                            </Card>
                            <Card mode='elevated' style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
                                <Card.Content>
                                    <Text>Individual Card 2</Text>
                                </Card.Content>
                            </Card>
                            <Card mode='elevated' style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
                                <Card.Content>
                                    <Text>Individual Card 3</Text>
                                </Card.Content>
                            </Card>
                        </ScrollView>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}
