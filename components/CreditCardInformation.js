import React, { useState, useCallback} from 'react';
import { View, Image, ScrollView, Dimensions} from 'react-native';
import {Button, Appbar, Text, Card, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './reusable-components/styles';
import PagerView from 'react-native-pager-view';
import CreditCardImage from './CreditCardImage';

import {
    LineChart,
    PieChart,
  } from "react-native-chart-kit";
import { Circle } from 'react-native-svg';

export default function CreditCardInformation() {

    const navigation = useNavigation();  
    const screenHeight = Dimensions.get('window').height;
    const CARD_PORTION = 1;
    const FULL_SCREEN = 1;
    const cardHeight = screenHeight * CARD_PORTION;
    const spacer = (FULL_SCREEN-cardHeight);
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
    const OUTER_CIRCLE_RADIUS = 5;
    const OUTER_CIRCLE_COLOR = "#7f78d2";
    const LINE_STROKE = '#8625f4';
    const STROKE_WIDTH = 2;
    const INNER_CIRCLE_RADIUS = 3;
    const LINE_FILL = 'none';
    const PIE_CHART_BACKGROUND_GRADIENT_FROM = "#1E2923";
    const PIE_CHART_BACKGROUND_GRADIENT_TO = "#08130D";
    const TRANSPARENT = 0;
    const PIECHART_BACKGROUND_OPACITY = 0.5;
    const PIECHART_BAR_PERCENTAGE = 0.5;
    const FOOD_AND_DINING_COLOR = "#355cab";
    const TRAVEL_COLOR = "#230470";
    const GROCERIES_COLOR = "#ff802b";
    const CAR_FUEL_COLOR = "#0275a3";
    const PERSONAL_COLOR = "#14a302";

    const [activeCreditCardUsage, setCreditCardUsage] = useState('Daily'); 
    const [activeRewardsAccumulation, setRewardsAccumulation] = useState('Weekly');
    
    const handleCreditCardUsage = (chartName) => {
      setCreditCardUsage(chartName);
    };

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
              r={OUTER_CIRCLE_RADIUS} 
              fill={OUTER_CIRCLE_COLOR} 
            />
            <Circle
              cx={x}
              cy={y}
              r={INNER_CIRCLE_RADIUS} 
              fill={WHITE}
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
          stroke: LINE_STROKE, 
          strokeWidth: STROKE_WIDTH, 
          fill: LINE_FILL, 
        }
      }

      const pieChartConfig = {
        backgroundGradientFrom: PIE_CHART_BACKGROUND_GRADIENT_FROM,
        backgroundGradientFromOpacity: TRANSPARENT,
        backgroundGradientTo: PIE_CHART_BACKGROUND_GRADIENT_TO,
        backgroundGradientToOpacity: PIECHART_BACKGROUND_OPACITY,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: STROKE_WIDTH,
        barPercentage: PIECHART_BAR_PERCENTAGE,
        useShadowColorFromDataset: false 
      };

      const pieChartData = [
        {
          name: "Food & Dining",
          expenses: 30,
          color: FOOD_AND_DINING_COLOR,
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Travel",
          expenses: 43,
          color: TRAVEL_COLOR,
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Groceries",
          expenses: 17,
          color: GROCERIES_COLOR,
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Car Fuel",
          expenses: 10,
          color: CAR_FUEL_COLOR,
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Personal",
          expenses: 0,
          color: PERSONAL_COLOR,
          legendFontColor: BLACK_TEXT,
          legendFontSize: LEGEND_FONT_SIZE
        }
      ];

    return (
        <PaperProvider style = {[styles.fullScreen, styles.container]}>
            <SafeAreaView style= {[styles.creditCardBackground, styles.fullScreen, styles.container]}>
            <CreditCardImage complex = {true} topPortion = {spacer} appBarText = {'Credit Card Information'} showText = {true} company = {'Delta Inc.'} details = {'Delta Inc. Credit Card .....1234'}></CreditCardImage>
            <View style = {[{height: cardHeight}, styles.fullWidth]}>
            <Card mode = 'elevated' style = {[styles.boxContainer, styles.largeContainer, styles.fullWidth, styles.container]}>
                  <Card.Content>
             <PagerView style={styles.fullScreen} initialPage={0} pageMargin={10}>
                  <View key = "1" style = {styles.fullScreen}> 
                        <View style={styles.row}>
                            <Button mode="contained" style={[styles.button, styles.additionalButtonStyling]} labelStyle = {styles.additionalButtonTextStyling}>
                                Groceries
                            </Button>
                            <Button mode="contained" style={[styles.button, styles.additionalButtonStyling]} labelStyle = {styles.additionalButtonTextStyling}>
                                Car Fuel
                            </Button> 
                        </View> 
                        <Text style = {styles.title}>{'\n'}Top Category Spend</Text>
                        <View style = {styles.fullScreen}>
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, {height:'25%'}]}>
                        <PieChart
                            data={pieChartData}
                            width={PIE_CHART_WIDTH}
                            height={PIE_CHART_HEIGHT}
                            style = {styles.fullScreen}
                            chartConfig={pieChartConfig}
                            accessor={"expenses"}
                            backgroundColor={"transparent"}
                        />
                        </Card>
                        </View>
                    </View>
                     <View key = "2" style = {styles.fullScreen}>
                      <Text style = {styles.title}>{'\n'}Credit Card Usage</Text>
                        <View style = {styles.fullWidth} >
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, {height: '55%'}]}>
                            <Card.Content>
                            <View style = {styles.row} >
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
                             <View style = {styles.centerAlign}>
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
                             <View style = {styles.centerAlign} >
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
                             <View style = {styles.centerAlign} >
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
                            </Card.Content>
                        </Card> 
                        </View>
                        </View>
                    <View key = "3" style = {styles.fullScreen}>
                        <Text style = {styles.title} >{'\n'}Rewards Accumulation</Text>
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, {height: '30%'}]}>
                           <Card.Content>
                           <View style = {styles.row} >
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
                             <View style = {styles.centerAlign} >
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
                             <View style = {styles.centerAlign} >
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
                      </PagerView>
                  </Card.Content>
              </Card>
            </View>
            </SafeAreaView>
          </PaperProvider>
    );
}