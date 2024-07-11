import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Appbar, Text, Card, Button, Divider, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './reusable-components/styles';

export default function Rewards() {
    const navigation = useNavigation();
    const handlePreviousPress = () => {
        navigation.goBack();
    };

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const TOP_PORTION = 0.25;
    const topHeight = screenHeight * TOP_PORTION;

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <Appbar.Header>
                    <Appbar.BackAction onPress={handlePreviousPress} />
                    <Appbar.Content title="Rewards" />
                </Appbar.Header>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {/* Top Portion */}
                    <View style={[styles.creditCardBackground, { height: topHeight, width: screenWidth }]}></View>
                    {/* Bottom Portion */}
                    <Text style={[styles.centeredTitle, {paddingTop: 20 }]}>Rewards & Benefits</Text>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View style={[styles.fullWidth, { padding: 16 }]}>
                            {/* Four Cards vertically stacked */}
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                                <Card.Content>
                                    <Text style={styles.title}>Reward 1</Text>
                                    <Text>Details about reward 1.</Text>
                                    <Divider style={styles.divider} />
                                    <Button mode="contained" style={styles.button} onPress={() => { /* Action */ }}>
                                        Learn More
                                    </Button>
                                </Card.Content>
                            </Card>
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                                <Card.Content>
                                    <Text style={styles.title}>Reward 2</Text>
                                    <Text>Details about reward 2.</Text>
                                    <Divider style={styles.divider} />
                                    <Button mode="contained" style={styles.button} onPress={() => { /* Action */ }}>
                                        Learn More
                                    </Button>
                                </Card.Content>
                            </Card>
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                                <Card.Content>
                                    <Text style={styles.title}>Reward 3</Text>
                                    <Text>Details about reward 3.</Text>
                                    <Divider style={styles.divider} />
                                    <Button mode="contained" style={styles.button} onPress={() => { /* Action */ }}>
                                        Learn More
                                    </Button>
                                </Card.Content>
                            </Card>
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                                <Card.Content>
                                    <Text style={styles.title}>Reward 4</Text>
                                    <Text>Details about reward 4.</Text>
                                    <Divider style={styles.divider} />
                                    <Button mode="contained" style={styles.button} onPress={() => { /* Action */ }}>
                                        Learn More
                                    </Button>
                                </Card.Content>
                            </Card>
                        </View>
                        {/* Horizontal Scroll for individual cards */}
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
                            <Card mode='elevated' style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
                                <Card.Content>
                                    <Text>Individual Card 4</Text>
                                </Card.Content>
                            </Card>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    );
}
