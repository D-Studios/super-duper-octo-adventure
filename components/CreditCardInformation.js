import React, { useState, useCallback } from 'react';
import { View, Image, ScrollView, Dimensions} from 'react-native';
import { Surface, Button, useTheme, Menu, Divider, IconButton, List, Appbar, Text, Card, Paragraph, ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './reusable-components/styles';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Circle } from 'react-native-svg';

export default function CreditCardInformation() {

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const CARD_PORTION = 0.7;
    const FULL_SCREEN = 1;
    const cardHeight = screenHeight * CARD_PORTION;
    const spacer = (FULL_SCREEN-CARD_PORTION) * screenHeight;
    const LEGEND_FONT_COLOR = "#000000";
    const LEGEND_FONT_SIZE = 12;

    const [activeCreditCardUsage, setCreditCardUsage] = useState('Daily'); 

    const handleCreditCardUsage = (chartName) => {
      setCreditCardUsage(chartName);
    };

    const lineChartData = {
        labels: ["June 24", "June 25", "June 26", "June 27", "June 28", "June 29"],
        datasets: [
          {
            data: [20, 30, 40, 20, 40, 20],
            withDots: true,
            withLine: true,
            fillShadowGradientOpacity: 0,
            strokeWidth: 2 
          }
        ]
      };
    
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
              fill="#fff" // White color
            />
          </React.Fragment>
        );
      };

      const lineStyles = {
        line: {
          stroke: '#8625f4', // Purple color for the line
          strokeWidth: 2, // Stroke width of the line
          fill: 'none', // No fill to hide the shaded area
        },
      };

      const lineChartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(127, 120, 210, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`, 
        propsForLines: {
          stroke: '#8625f4', // Purple color for the line
          strokeWidth: 2, // Stroke width of the line
          fill: 'none', // No fill to hide the shaded area
        }
      }

      const chartConfig = {
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
          legendFontColor: LEGEND_FONT_COLOR,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Travel",
          expenses: 43,
          color: "#230470",
          legendFontColor: LEGEND_FONT_COLOR,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Groceries",
          expenses: 17,
          color: "#ff802b",
          legendFontColor: LEGEND_FONT_COLOR,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Car Fuel",
          expenses: 10,
          color: "#0275a3",
          legendFontColor: LEGEND_FONT_COLOR,
          legendFontSize: LEGEND_FONT_SIZE
        },
        {
          name: "Personal",
          expenses: 0,
          color: "#14a302",
          legendFontColor: LEGEND_FONT_COLOR,
          legendFontSize: LEGEND_FONT_SIZE
        }
      ];

    return (
        <PaperProvider style = {styles.fullScreen}>
            <SafeAreaView style= {[styles.creditCardBackground, styles.fullScreen]}>
            <View style = {{height: spacer}} />
            <View style = {[{height: cardHeight}, styles.fullWidth]}>
            <Card mode = 'elevated' style = {[styles.boxContainer, styles.largeContainer, styles.fullWidth, styles.container]}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Card.Content>
                        <View style={styles.row}>
                            <Button mode="contained" style={[styles.button, styles.additionalButtonStyling]} labelStyle = {styles.additionalButtonTextStyling}>
                                Groceries
                            </Button>
                            <Button mode="contained" style={[styles.button, styles.additionalButtonStyling]} labelStyle = {styles.additionalButtonTextStyling}>
                                Car Fuel
                            </Button>
                        </View>

                        <Text style = {styles.title}>{'\n'}Top Category Spend</Text>
                        <View style = {styles.fullWidth}>
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, styles.container, styles.fullWidth]}>
                        <PieChart
                            data={pieChartData}
                            width={300}
                            height={180}
                            style = {styles.container}
                            chartConfig={chartConfig}
                            accessor={"expenses"}
                            backgroundColor={"transparent"}
                        />
                        </Card>
                        </View>
                    
                        <Text style = {styles.title}>{'\n'}Credit Card Usage</Text>

                        <View style = {styles.fullWidth}>
                        <Card mode = 'elevated' style = {[styles.boxContainerVariation2, styles.container, styles.fullWidth]}>
                            <Card.Content>
                            <View style = {styles.row}>
                              <TouchableOpacity 
                              onPress={() => handleCreditCardUsage('Daily')} 
                              style = {{
                                borderBottomWidth: activeCreditCardUsage == 'Daily' ? 2 : 0,
                                borderBottomColor: '#3a0078'
                              }}
                              mode = "text">
                                <Text style = {{color: activeCreditCardUsage == 'Daily' ? '#908e91' : '#000000'}}>Daily</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                              onPress={() => handleCreditCardUsage('Weekly')} 
                              style = {{
                                borderBottomWidth: activeCreditCardUsage == 'Weekly' ? 2 : 0,
                                borderBottomColor: '#3a0078'
                              }} 
                              mode = "text">
                                <Text style = {{color: activeCreditCardUsage == 'Weekly' ? '#908e91' : '#000000'}}>Weekly</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                               onPress={() => handleCreditCardUsage('Monthly')} 
                               style = {{
                                borderBottomWidth: activeCreditCardUsage == 'Monthly' ? 2 : 0,
                                borderBottomColor: '#3a0078'
                              }}
                               mode = "text">
                                <Text style = {{color: activeCreditCardUsage == 'Monthly' ? '#908e91' : '#000000'}}>Monthly</Text>
                              </TouchableOpacity>
                            </View>
                            {activeCreditCardUsage == 'Daily' && (
                             <View style = {{alignItems: 'center'}}>
                             <LineChart
                              data={lineChartData}
                              width = {380}
                              height = {180}
                              style = {{flexShrink : 1}}
                              yAxisInterval={1} // optional, defaults to 1
                              withVerticalLabels = {true}
                              withHorizontalLabels = {false}
                              chartConfig={lineChartConfig}
                              withInnerLines = {false}
                              withOuterLines = {false}
                              xLabelsOffset = {0}
                              renderDotContent = {lineChartDotContent}
                              bezier
                              /> 
                              </View>
                            ) 
                           }
                            </Card.Content>
                        </Card>
                        </View>
                    </Card.Content>
                </ScrollView>
            </Card> 
            </View>
            </SafeAreaView>
        </PaperProvider>
    );
}