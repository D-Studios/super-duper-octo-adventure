import React from 'react';
import Confirm from '../Confirm.js';
import CreditCardInformation from '../CreditCardInformation.js';
import Rewards from '../Rewards.js';
import Transactions from '../Transactions.js';
import Approved from '../Approved.js';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { screen, render, fireEvent} from '@testing-library/react-native';

jest.useFakeTimers();

const Stack = createStackNavigator();

describe('Confirm', () => {
    it('Just going back to Confirm Screen', ()=> {
  
      //Goes to Confirm Information and Approved Screen screen
      const { getByTestId } = render(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Approved">
          <Stack.Screen
            name="Confirm"
            component={Confirm}
            options={{ 
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS
            }}
          />
        <Stack.Screen
          name="Approved"
          component={Approved}
          options={{ 
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
      );
  
      //Press back button and check we are in Verify Information screen.
      const backButton = getByTestId('Back Button').children[0];
      fireEvent.press(backButton);
      expect(screen.getByText('Confirm')).toBeTruthy(); 
    });
    it('Clicking on all dropdowns and then closing them', ()=> {
  
        //Only stays in Approved Screen.
        const { getByTestId, getByLabelText, queryByTestId, getByText, getByDisplayValue, queryByDisplayValue} = render(
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Approved">
          <Stack.Screen
            name="Approved"
            component={Approved}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
          </Stack.Navigator>
        </NavigationContainer>
        );
    
        //Open and close Card Holder Agreement Dropdown.
        const cardHolderAgreement = getByTestId('Card Holder Agreement').children[0];
        expect(screen.queryByDisplayValue('This is some expandable text 1.')).toBeNull();
        fireEvent.press(cardHolderAgreement);
        expect(screen.getByText('This is some expandable text 1.')).toBeTruthy();
        fireEvent.press(cardHolderAgreement);
        expect(screen.queryByDisplayValue('This is some expandable text 1.')).toBeNull();

        //Open and close Privacy Notice Dropdown.
        const privacyNotice = getByTestId('Privacy Notice').children[0];
        expect(screen.queryByDisplayValue('This is some expandable text 2.')).toBeNull();
        fireEvent.press(privacyNotice);
        expect(screen.getByText('This is some expandable text 2.')).toBeTruthy();
        fireEvent.press(privacyNotice);
        expect(screen.queryByDisplayValue('This is some expandable text 2.')).toBeNull();

        //Open and close Rewards Agreement Dropdown.
        const rewardsAgreement = getByTestId('Rewards Agreement').children[0];
        expect(screen.queryByDisplayValue('This is some expandable text 3.')).toBeNull();
        fireEvent.press(rewardsAgreement);
        expect(screen.getByText('This is some expandable text 3.')).toBeTruthy();
        fireEvent.press(rewardsAgreement);
        expect(screen.queryByDisplayValue('This is some expandable text 3.')).toBeNull();
      });
      it('Opening Menu And Closing Menu', ()=> {
  
        //Only stays in Approved Screen.
        const { getByTestId } = render(
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Approved">
          <Stack.Screen
            name="Approved"
            component={Approved}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
          </Stack.Navigator>
        </NavigationContainer>
        );

        const mockMeasureInWindow = jest.fn((callback) => {
            callback(10, 20, 100, 50); // x, y, width, height
          });
      
          const mockEvent = {
            target: {
              measureInWindow: mockMeasureInWindow
            }
          };
    
        const menu = getByTestId('Approved Menu').children[0];
        const cardHolderAgreement = getByTestId('Card Holder Agreement').children[0];

        //Menu should not appear at beginning of screen.
        expect(screen.queryByDisplayValue('Credit Card Information')).toBeNull();
        expect(screen.queryByDisplayValue('Rewards')).toBeNull();
        expect(screen.queryByDisplayValue('Transactions')).toBeNull();

        //Reveal menu by clicking on three dot icon
        fireEvent.press(menu, mockEvent);
        expect(screen.getByText('Credit Card Information')).toBeTruthy(); 
        expect(screen.getByText('Rewards')).toBeTruthy(); 
        expect(screen.getByText('Transactions')).toBeTruthy(); 

        //Click on three dot icon, hiding menu again.
        fireEvent.press(menu, mockEvent);
        expect(screen.queryByDisplayValue('Credit Card Information')).toBeNull();
        expect(screen.queryByDisplayValue('Rewards')).toBeNull();
        expect(screen.queryByDisplayValue('Transactions')).toBeNull();

        //Click on three dot icon, showing menu again.
        fireEvent.press(menu, mockEvent);
        expect(screen.getByText('Credit Card Information')).toBeTruthy(); 
        expect(screen.getByText('Rewards')).toBeTruthy(); 
        expect(screen.getByText('Transactions')).toBeTruthy(); 

        //Click on Card Holder Agreement, hiding menu
        fireEvent.press(cardHolderAgreement, mockEvent);
        expect(screen.queryByDisplayValue('Credit Card Information')).toBeNull();
        expect(screen.queryByDisplayValue('Rewards')).toBeNull();
        expect(screen.queryByDisplayValue('Transactions')).toBeNull();

      });
      it('Going To Credit Card Information Screen', ()=> {
  
        //Only stays in Approved Screen.
        const { getByTestId, getByLabelText, queryByTestId, getByText, getByDisplayValue, queryByDisplayValue} = render(
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Approved">
          <Stack.Screen
            name="Approved"
            component={Approved}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
        <Stack.Screen
          name="CreditCardInformation"
          component={CreditCardInformation}
          options={{ 
            headerShown: false,
            ...TransitionPresets.FadeFromBottomAndroid
          }}
        />
          </Stack.Navigator>
        </NavigationContainer>
        );

        const mockMeasureInWindow = jest.fn((callback) => {
            callback(10, 20, 100, 50); // x, y, width, height
          });
      
          const mockEvent = {
            target: {
              measureInWindow: mockMeasureInWindow
            }
          };
    
        //Open Menu And Go To Credit Card Information Screen.
        const menu = getByTestId('Approved Menu').children[0];
        fireEvent.press(menu, mockEvent);
        fireEvent.press(screen.getByText('Credit Card Information'), mockEvent);
        expect(screen.getByText('Top Category Spend')).toBeTruthy();
      });
      it('Going To Rewards', ()=> {
  
        //Only stays in Approved Screen.
        const { getByTestId, getByLabelText, queryByTestId, getByText, getByDisplayValue, queryByDisplayValue} = render(
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Approved">
          <Stack.Screen
            name="Approved"
            component={Approved}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
         <Stack.Screen
          name="Rewards"
          component={Rewards}
          options={{ 
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
          }}
        />
          </Stack.Navigator>
        </NavigationContainer>
        );

        const mockMeasureInWindow = jest.fn((callback) => {
            callback(10, 20, 100, 50); // x, y, width, height
          });
      
          const mockEvent = {
            target: {
              measureInWindow: mockMeasureInWindow
            }
          };
    
        //Open Menu And Go To Rewards Screen.
        const menu = getByTestId('Approved Menu').children[0];
        fireEvent.press(menu, mockEvent);
        fireEvent.press(screen.getByText('Rewards'), mockEvent);
        expect(screen.getByText('Rewards & Benefits')).toBeTruthy();
      });
      it('Going To Transactions', ()=> {
  
        //Only stays in Approved Screen.
        const { getByTestId, getByLabelText, queryByTestId, getByText, getByDisplayValue, queryByDisplayValue} = render(
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Approved">
          <Stack.Screen
            name="Approved"
            component={Approved}
            options={{ 
              headerShown: false,
              ...TransitionPresets.RevealFromBottomAndroid
            }}
          />
          <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{ 
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
          }}
        />
          </Stack.Navigator>
        </NavigationContainer>
        );

        const mockMeasureInWindow = jest.fn((callback) => {
            callback(10, 20, 100, 50); // x, y, width, height
          });
      
          const mockEvent = {
            target: {
              measureInWindow: mockMeasureInWindow
            }
          };
    
        //Open Menu And Go To Transactions Screen.
        const menu = getByTestId('Approved Menu').children[0];
        fireEvent.press(menu, mockEvent);
        fireEvent.press(screen.getByText('Transactions'), mockEvent);
        expect(screen.getByText('Outstanding Balance')).toBeTruthy();
      });
});