import React from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import { Appbar, Text, Card, Button, Divider, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity} from 'react-native';
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
                    <View style={[styles.creditCardBackground, { height: topHeight, width: screenWidth }]}>
                    <Image
                source={{ uri: 'https://t4.ftcdn.net/jpg/03/27/87/41/360_F_327874197_zaMWlrLxEw8sbjn4jnVsmqu3K3ZB1Jur.jpg' }}
                style={styles.centeredImage}
              /> 
                    </View>
                    {/* Bottom Portion */}
                    <Text style={[styles.centeredTitle, {paddingTop: 20 }]}>Rewards & Benefits</Text>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View style={[styles.fullWidth, { padding: 16 }]}>
                            {/* Four Cards vertically stacked */}
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                                <Card.Content>
                                  <Text style={styles.title}>Delta inc rewards points</Text>
                                   <View style={styles.row}>
                                        <Text style={styles.unBoldedTitle}>4,822</Text>
                                        <Text style={[styles.rightAlignedText, styles.unBoldedTitle]}>533</Text>
                                  </View>
                                  <View style={styles.row}>
                                        <Text style={styles.unBoldedMiniTitle}>Total available</Text>
                                        <Text style={[styles.rightAlignedText, styles.unBoldedMiniTitle]}>Pending</Text>
                                  </View>
                                    <Divider style={styles.divider} />
                                    <Button mode="text" style={styles.button} onPress={() => { /* Action */ }}>
                                       Redeem available points
                                    </Button>
                                </Card.Content>
                            </Card>
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                                <Card.Content>
                                <Text style={styles.title}>3% Choice</Text>
                                <Text style={styles.unBoldedTitle}>Dining</Text>
                                <Divider style={styles.divider} />
                                <Button mode="text" style={styles.button} onPress={() => { /* Action */ }}>
                                       Change 3%
                                </Button>
                                </Card.Content>
                            </Card>
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                            <Card.Content>
                                  <Text style={styles.title}>Alpha Airline Mileage</Text>
                                   <View style={styles.row}>
                                        <Text style={styles.unBoldedTitle}>112,102</Text>
                                        <Text style={[styles.rightAlignedText, styles.unBoldedTitle]}>346</Text>
                                  </View>
                                  <View style={styles.row}>
                                        <Text style={styles.unBoldedMiniTitle}>Total available</Text>
                                        <Text style={[styles.rightAlignedText, styles.unBoldedMiniTitle]}>Pending</Text>
                                  </View>
                                    <Divider style={styles.divider} />
                                    <Button mode="text" style={styles.button} onPress={() => { /* Action */ }}>
                                       SSO Login to Alpha Airline
                                    </Button>
                                </Card.Content>
                            </Card>
                            <Card mode="elevated" style={[styles.boxContainer, { marginBottom: 16, alignSelf: 'center', width: '100%' }]}>
                            <Card.Content>
                                  <Text style={styles.title}>Credit Card Benefits</Text>
                                  <TouchableOpacity 
                              onPress={() => {}}
                              mode = "text"
                              style = {styles.centerAlign}
                              >
                                <Text>3% cash back category choice</Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />
                            <TouchableOpacity 
                              onPress={() => {}}
                              mode = "text"
                              style = {styles.centerAlign}
                              >
                                <Text>Shop with points on Delta Inc.</Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />
                            <TouchableOpacity 
                              onPress={() => {}}
                              mode = "text"
                              style = {styles.centerAlign}
                              >
                                <Text>Alpha airline mileage plan</Text>
                            </TouchableOpacity>
                            <Divider style={styles.divider} />
                                    <Button mode="text" style={styles.button} onPress={() => { /* Action */ }}>
                                      View all reward benefits
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
