import React, { useState, useCallback, useRef, useEffect, Component } from 'react';
import { View, Image, ScrollView, PanResponder, Animated, StyleSheet,  Dimensions} from 'react-native';
import { Surface, Button, useTheme, Menu, Divider, IconButton, List, Appbar, Text, Card, Paragraph, ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './reusable-components/styles';
import PagerView from 'react-native-pager-view';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Circle } from 'react-native-svg';
import Swipeable from "swipeable-react";
import SwipeGesture from './swipe-gesture'
//import { Swiper, SwiperSlide } from 'swiper/react';
// import PagerView from 'react-native-pager-view';

export default function CreditCardInformation() {

    const FIRST_SCREEN = 0;
    const navigation = useNavigation();  
    const screenHeight = Dimensions.get('window').height;
    const CARD_PORTION = 0.48;
    const FULL_SCREEN = 1;
    const cardHeight = screenHeight * CARD_PORTION;
    const spacer = (FULL_SCREEN-CARD_PORTION) * screenHeight;
    const LEGEND_FONT_SIZE = 12;
    const LINE_CHART_WIDTH = 420;
    const LINE_CHART_HEIGHT = 180;
    const PIE_CHART_WIDTH = 300;
    const PIE_CHART_HEIGHT = 180;
    const DAILY = 'Daily';
    const MONTHLY = 'Monthly';
    const WEEKLY = 'Weekly';
    const BLACK_TEXT = '#000000';
    const HIGHLIGHTED_TEXT = '#908e91';
    const HIGHLIGHTED_BORDER_BOTTOM = '#3a0078';
    const WHITE = "#ffffff";
    const LINE_CHART_STROKE_WIDTH = 2;
    const BOTTOM_BORDER_WIDTH = 2;
    const NO_BOTTOM_BORDER = 0;
    const THOUSAND_DOLLARS = '$K';
    const NUMBER_OF_SCREENS = 3;

    const [activeCreditCardUsage, setCreditCardUsage] = useState('Daily'); 
    const [activeRewardsAccumulation, setRewardsAccumulation] = useState('Weekly');
    
    const handleCreditCardUsage = (chartName) => {
      setCreditCardUsage(chartName);
    };

    const swipe = (newIndex) => {
      if(currentIndex>=FIRST_SCREEN && currentIndex < NUMBER_OF_SCREENS) {
        currentIndex = newIndex;
      }
    }

    const handleRewardsAccumulation = (chartName) => {
      setRewardsAccumulation(chartName);
    }
    const dailyCreditCardUsageData = {
        labels: ["Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30"],
        datasets: [
          {
            data: [20, 30, 40, 20, 40, 20, 40], 
            withDots: true,
            withLine: true,
            strokeWidth: LINE_CHART_STROKE_WIDTH 
          }
        ]
      };
    
    const weeklyCreditCardUsageData = {
      labels: ["Jun Week 1", "Jun Week 2","Jun Week 3", "Jun Week 4"],
      datasets: [
        {
          data: [10, 20, 30, 0],
          withDots: true,
          withLine: true,
          strokeWidth: LINE_CHART_STROKE_WIDTH 
        }
      ]
    };

    const monthlyCreditCardUsageData = {
      labels: ["Jan", "Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [20, 30, 40, 0, 20, 30, 40, 0, 20, 30, 40, 20],
          withDots: true,
          withLine: true,
          strokeWidth: LINE_CHART_STROKE_WIDTH 
        }
      ]
    };

    const weeklyRewardsAccumulation = {
      labels: ["Jan Week 1", "Jan Week 2", "Jan Week 3", "Jan Week 4"],
      datasets: [
        {
          data: [20, 30, 40, 0],
          withDots: true,
          withLine: true,
          strokeWidth: LINE_CHART_STROKE_WIDTH 
        }
      ]
    }

    const monthlyRewardsAccumulation = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [20, 30, 40, 0, 20, 30, 40, 0, 20, 30, 40, 20],
          withDots: true,
          withLine: true,
          strokeWidth: LINE_CHART_STROKE_WIDTH 
        }
      ]
    }
    
    const handlePreviousPress = useCallback(() => {
      navigation.navigate('Approved');
    }, [navigation]);
    
    
      const lineChartDotContent = ({ x, y, index }) => {
        return (
          <React.Fragment key={index}>
            <Circle
              cx={x}
              cy={y}
              r={5} // Outer circle radius
              fill="#7f78d2" // Purple color
            />
            <Circle
              cx={x}
              cy={y}
              r={3} // Inner circle radius
              fill={WHITE}// White color
            />
          </React.Fragment>
        );
      };

      const lineChartConfig = {
        backgroundGradientFrom: WHITE,
        backgroundGradientTo: WHITE,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(127, 120, 210, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`, 
        propsForLines: {
          stroke: '#8625f4', // Purple color for the line
          strokeWidth: 2, // Stroke width of the line
          fill: 'none', // No fill to hide the shaded area
        }
      }

      const pieChartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

      const pieChartData = [
        {
          name: "Food & Dining",
          expenses: 30,
          color: "#355cab",
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Travel",
          expenses: 43,
          color: "#230470",
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Groceries",
          expenses: 17,
          color: "#ff802b",
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Car Fuel",
          expenses: 10,
          color: "#0275a3",
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Personal",
          expenses: 0,
          color: "#14a302",
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        }
      ];

    return (
        <PaperProvider style = {[styles.fullScreen, styles.container]}>
            <SafeAreaView style= {[styles.creditCardBackground, styles.fullScreen, styles.container]}>
            <View style = {{height: spacer}}>
            <Appbar.Header>
              <Appbar.BackAction onPress={handlePreviousPress} />
              <Appbar.Content title="Credit Card Information" />
              </Appbar.Header>
              <Text style = {[styles.miniTitle, styles.content]}>Delta Inc.</Text>
              <Text style = {[styles.title, styles.content]}>Delta Inc. Credit Card.....1234</Text>
              <Image
                source={{ uri: 'https://t4.ftcdn.net/jpg/03/27/87/41/360_F_327874197_zaMWlrLxEw8sbjn4jnVsmqu3K3ZB1Jur.jpg' }}
                style={styles.centeredImage}
              />

            </View>
            <View style = {[{height: cardHeight}, styles.fullWidth]}>
            <Card mode = 'elevated' style = {[styles.boxContainer, styles.largeContainer, styles.fullWidth, styles.container]}>
                  <Card.Content>
                  {/* <Animated.View
                         {...panResponder.panHandlers}
                 style = {{
                   transform: [{translateX: swipeAnim}]
                 }}
                 onLayout = {(event)=> {
                   screenWidth.current = event.nativeEvent.layout.width;
                 }}
                 > */}
             <PagerView style={{width:'100%', height:'100%'}} initialPage={0} pageMargin={10}>
                   {/* { currentIndex == TOP_CATEGORY_SPEND_SCREEN && ( */}
                  <View key = "1" collapsable={false} style = {{width: '100%', height: '100%'}}> 
                        <View style={styles.row} collapsable={false}>
                            <Button mode="contained" style={[styles.button, styles.additionalButtonStyling]} labelStyle = {styles.additionalButtonTextStyling}>
                                Groceries
                            </Button>
                            <Button mode="contained" style={[styles.button, styles.additionalButtonStyling]} labelStyle = {styles.additionalButtonTextStyling}>
                                Car Fuel
                            </Button>
                        </View> 
                        {/* <SwipeGesture onSwipePerformed={this.onSwipePerformed}> */}
                        <Text style = {styles.title}>{'\n'}Top Category Spend</Text>
                        <View style = {styles.fullWidth} collapsable = {false}>
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, styles.fullWidth, {height: '100%'}]}>
                        <PieChart
                            data={pieChartData}
                            width={PIE_CHART_WIDTH}
                            height={PIE_CHART_HEIGHT}
                            style = {{width:'100%', height:'100%'}}
                            chartConfig={pieChartConfig}
                            accessor={"expenses"}
                            backgroundColor={"transparent"}
                        />
                        </Card>
                        </View>
                        {/* </SwipeGesture> */}
                    </View>
                     {/* )
                    }  */}
                    {/* { currentIndex == CREDIT_CARD_USAGE_SCREEN && ( */}
                     <View key = "2" collapsable={false} style = {{width:'100%', height:'100%'}}>
                      {/* <SwipeGesture onSwipePerformed={this.onSwipePerformed}> */}
                        <Text style = {styles.title}>{'\n'}Credit Card Usage</Text>
                      {/* </SwipeGesture> */}
                        <View style = {styles.fullWidth} collapsable={false}>
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, styles.fullWidth, {height: '100%'}]}>
                            <Card.Content>
                            <View style = {styles.row} collapsable={false}>
                              <TouchableOpacity 
                              onPress={() => handleCreditCardUsage(DAILY)} 
                              style = {{
                                borderBottomWidth: activeCreditCardUsage == DAILY ? BOTTOM_BORDER_WIDTH : NO_BOTTOM_BORDER,
                                borderBottomColor: HIGHLIGHTED_BORDER_BOTTOM
                              }}
                              mode = "text">
                                <Text style = {{color: activeCreditCardUsage == DAILY ? HIGHLIGHTED_TEXT : BLACK_TEXT}}>Daily</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                              onPress={() => handleCreditCardUsage(WEEKLY)} 
                              style = {{
                                borderBottomWidth: activeCreditCardUsage == WEEKLY ? BOTTOM_BORDER_WIDTH : NO_BOTTOM_BORDER,
                                borderBottomColor: HIGHLIGHTED_BORDER_BOTTOM
                              }} 
                              mode = "text">
                                <Text style = {{color: activeCreditCardUsage == WEEKLY ? HIGHLIGHTED_TEXT : BLACK_TEXT}}>Weekly</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                               onPress={() => handleCreditCardUsage(MONTHLY)} 
                               style = {{
                                borderBottomWidth: activeCreditCardUsage == MONTHLY ? BOTTOM_BORDER_WIDTH : NO_BOTTOM_BORDER,
                                borderBottomColor: HIGHLIGHTED_BORDER_BOTTOM
                              }}
                               mode = "text">
                                <Text style = {{color: activeCreditCardUsage == MONTHLY ? HIGHLIGHTED_TEXT : BLACK_TEXT}}>Monthly</Text>
                              </TouchableOpacity>
                            </View>
                            {activeCreditCardUsage == DAILY && (
                             <View style = {styles.centerAlign} collapsable={false}>
                             <ScrollView horizontal={true}>
                             <LineChart
                              data={dailyCreditCardUsageData}
                              width = {LINE_CHART_WIDTH}
                              height = {LINE_CHART_HEIGHT}
                              withVerticalLabels = {true}
                              withHorizontalLabels = {true}
                              chartConfig={lineChartConfig}
                              yAxisSuffix = {THOUSAND_DOLLARS}
                              withInnerLines = {false}
                              withOuterLines = {false}
                              renderDotContent = {lineChartDotContent}
                              bezier
                              /> 
                              </ScrollView>
                              </View>
                            ) 
                           }
                           {activeCreditCardUsage == WEEKLY && (
                             <View style = {styles.centerAlign} collapsable={false}>
                             <ScrollView horizontal={true}>
                             <LineChart
                              data={weeklyCreditCardUsageData}
                              width = {LINE_CHART_WIDTH}
                              height = {LINE_CHART_HEIGHT}
                              withVerticalLabels = {true}
                              withHorizontalLabels = {true}
                              chartConfig={lineChartConfig}
                              yAxisSuffix = {THOUSAND_DOLLARS}
                              withInnerLines = {false}
                              withOuterLines = {false}
                              renderDotContent = {lineChartDotContent}
                              bezier
                              /> 
                              </ScrollView>
                              </View>
                            ) 
                           }
                           {activeCreditCardUsage == MONTHLY && (
                             <View style = {styles.centerAlign} collapsable={false}>
                             <ScrollView horizontal={true}>
                             <LineChart
                              data={monthlyCreditCardUsageData}
                              width = {LINE_CHART_WIDTH}
                              height = {LINE_CHART_HEIGHT}
                              withVerticalLabels = {true}
                              withHorizontalLabels = {true}
                              chartConfig={lineChartConfig}
                              yAxisSuffix = {THOUSAND_DOLLARS}
                              withInnerLines = {false}
                              withOuterLines = {false}
                              renderDotContent = {lineChartDotContent}
                              bezier
                              /> 
                              </ScrollView>
                              </View>
                            ) 
                           } 
                           {/* <SwipeGesture onSwipePerformed={this.onSwipePerformed}></SwipeGesture> */}
                            </Card.Content>
                        </Card> 
                        </View>
                        </View>
                    {/* )
                          } */}
                  {/* {currentIndex == REWARDS_ACCUMULATION_SCREEN && ( */}
                    <View key = "3" collapsable={false} style = {{width: '100%', height: '100%'}}>
                        <Text style = {styles.title} collapsable={false}>{'\n'}Rewards Accumulation</Text>
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, {height:'100%'}]}>
                           <Card.Content>
                           <View style = {styles.row} collapsable={false}>
                              <TouchableOpacity 
                              onPress={() => handleRewardsAccumulation(WEEKLY)} 
                              style = {{
                                borderBottomWidth: activeRewardsAccumulation == WEEKLY ? BOTTOM_BORDER_WIDTH : NO_BOTTOM_BORDER,
                                borderBottomColor: HIGHLIGHTED_BORDER_BOTTOM
                              }}
                              mode = "text">
                                <Text style = {{color: activeRewardsAccumulation == WEEKLY ? HIGHLIGHTED_TEXT : BLACK_TEXT}}>Weekly</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                              onPress={() => handleRewardsAccumulation(MONTHLY)} 
                              style = {{
                                borderBottomWidth: activeRewardsAccumulation == MONTHLY ? BOTTOM_BORDER_WIDTH : NO_BOTTOM_BORDER,
                                borderBottomColor: HIGHLIGHTED_BORDER_BOTTOM
                              }} 
                              mode = "text">
                                <Text style = {{color: activeRewardsAccumulation == MONTHLY ? HIGHLIGHTED_TEXT : BLACK_TEXT}}>Monthly</Text>
                              </TouchableOpacity>
                            </View>
                            {activeRewardsAccumulation == WEEKLY && (
                             <View style = {styles.centerAlign} collapsable={false}>
                             <ScrollView horizontal={true}>
                             <LineChart
                              data={weeklyRewardsAccumulation}
                              width = {LINE_CHART_WIDTH}
                              height = {LINE_CHART_HEIGHT}
                              withVerticalLabels = {true}
                              withHorizontalLabels = {true}
                              chartConfig={lineChartConfig}
                              yAxisSuffix = {THOUSAND_DOLLARS}
                              withInnerLines = {false}
                              withOuterLines = {false}
                              renderDotContent = {lineChartDotContent}
                              bezier
                              /> 
                              </ScrollView>
                              </View>
                            ) 
                           }
                           {activeRewardsAccumulation == MONTHLY && (
                             <View style = {styles.centerAlign} collapsable={false}>
                             <ScrollView horizontal={true}>
                             <LineChart
                              data={monthlyRewardsAccumulation}
                              width = {LINE_CHART_WIDTH}
                              height = {LINE_CHART_HEIGHT}
                              withVerticalLabels = {true}
                              withHorizontalLabels = {true}
                              chartConfig={lineChartConfig}
                              yAxisSuffix = {THOUSAND_DOLLARS}
                              withInnerLines = {false}
                              withOuterLines = {false}
                              renderDotContent = {lineChartDotContent}
                              bezier
                              /> 
                              </ScrollView>
                              </View>
                            ) 
                           }
                           </Card.Content>
                        </Card> 
                        </View>
                  {/* )
                          } */}
                          </PagerView>
                    </Card.Content>
                    </Card>
                    </View>
                    </SafeAreaView>
                    </PaperProvider>
    );
}