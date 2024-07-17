import React from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import { Appbar, Text, Card, Button, Divider, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView} from 'react-native';
import styles from './reusable-components/styles';
import rewardsStyles from './rewardsStyles';
import CreditCardImage from './CreditCardImage';
import RewardsCardComponent from './reusable-components/RewardsCardComponent';

export default function Rewards() {

    const TOP_PORTION = 0.25;

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                {/* Top Portion */}
                <CreditCardImage 
                    complex = {true} 
                    topPortion = {TOP_PORTION} appBarText = {'Rewards'} 
                    showText={false}>
                </CreditCardImage>

                {/* Bottom Portion */}
                 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={[rewardsStyles.centeredTitle, {paddingTop: 20 }]}>Rewards & Benefits</Text>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View style={[styles.fullWidth, { paddingTop: 6, paddingRight: 20, paddingBottom: 20, paddingLeft: 20}]}>
                            {/* Four Cards vertically stacked */}
                            <RewardsCardComponent
                                title="Delta Inc. rewards points"
                                iconLibrary="MaterialCommunityIcons"
                                iconName="piggy-bank-outline"
                                availablePoints="4,822"
                                availableLabel="Total available"
                                pendingPoints="533"
                                pendingLabel="Pending"
                                buttonText="Redeem available points"
                                onRedeem={() => { /* Action */ }}
                            />

                            <RewardsCardComponent
                                title="3% Choice"
                                iconLibrary="MaterialIcons"
                                iconName="local-dining"
                                availablePoints="Dining"
                                buttonText="Change 3% choice"
                                onRedeem={() => { /* Action */ }}
                            />

                            <RewardsCardComponent
                                title="Alpha Airline Mileage"
                                iconLibrary="MaterialCommunityIcons"
                                iconName="airplane"
                                availablePoints="112,102"
                                availableLabel="Total available"
                                pendingPoints="346"
                                pendingLabel="Pending"
                                buttonText="SSO Login to Alpha Airline"
                                onRedeem={() => { /* Action */ }}
                            />

                            <RewardsCardComponent
                                title="Credit Card Benefits"
                                iconLibrary="MaterialCommunityIcons"
                                iconName="gift-outline"
                                benefits={[
                                    "3% cash back category choice",
                                    "Shop with points on Delta Inc.",
                                    "Alpha airline mileage plan"
                                ]}
                                onBenefitPress={() => { }}
                                buttonText="View all reward benefits"
                                onRedeem={() => {}}
                            />
                        </View>


                        <View>
                            <View style={[styles.row, rewardsStyles.dealsHeader]}>
                                <Text style={styles.title}>My Delta Inc. Deals</Text>
                                <Button 
                                    mode="text" 
                                    style={rewardsStyles.viewAllButton} 
                                    labelStyle={rewardsStyles.buttonLabel}
                                    onPress={() => { /* Action */ }}
                                >
                                        View all (10)
                                </Button>
                            </View>
                       

                        {/* Horizontal Scroll for individual cards */}
                        <ScrollView horizontal={true} style={styles.fullWidth} contentContainerStyle={{ paddingLeft: 6, paddingBottom: 6 }}>
                            <Card mode='elevated' style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
                                <Card.Content>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chevron_Logo.svg/1836px-Chevron_Logo.svg.png' }}
                                    style={styles.centeredImage}
                                /> 
                                    <Text style = {styles.regularText}>3% Cash back</Text>
                                    <Text style={styles.miniText}>Expires 10/31/23</Text>
                                </Card.Content>
                            </Card>
                            <Card mode='elevated' style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
                                <Card.Content>
                                <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png' }}
                style={styles.centeredImage}
              /> 
                                   <Text style = {styles.regularText}>5% Cash back</Text>
                                    <Text style={styles.miniText}>Expires 10/31/23</Text>
                                </Card.Content>
                            </Card>
                            <Card mode='elevated' style={[styles.boxContainer, { width: 200, marginRight: 16 }]}>
                                <Card.Content>
                                <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhvKe4ebnX7xrphoWADoK-wteStypzRFKWQ&s'}}
                style={styles.centeredImage}
              /> 
                                     <Text style = {styles.regularText}>$5 Cash back</Text>
                                    <Text style={styles.miniText}>8 days left</Text>
                                </Card.Content>
                            </Card> 
                        </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    );
}
