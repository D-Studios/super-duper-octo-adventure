import React from 'react';
import VerifyInformation from '../VerifyInformation.js';
import Confirm from '../Confirm.js';
import formatDate from '../reusable-components/FormatDate';
import Approved from '../Approved.js';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { screen, render, fireEvent} from '@testing-library/react-native';

jest.useFakeTimers();

const Stack = createStackNavigator();
const eventData = {
  nativeEvent: {
    contentOffset: {
      y: 200,
    },
  },
};

describe('Confirm', () => {
  it('Just going back to VerifyInformation Screen', ()=> {

    //Goes to Verify Information and Confirm screen
    const { getByTestId } = render(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Confirm">
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{ 
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS
          }}
        />
        <Stack.Screen
          name="VerifyInformation"
          component={VerifyInformation}
          options={{ 
            headerShown: false,
            ...TransitionPresets.FadeFromBottomAndroid
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );

    //Press back button and check we are in Verify Information screen.
    const backButton = getByTestId('Back Button').children[0];
    fireEvent.press(backButton);
    expect(screen.getByText('Verify and Pre-fill Application')).toBeTruthy(); 

  });
  
  it('Filling out info and going to Approval Screen', () => {

   //Goes to Confirm and Approved Screen
   const { getByTestId } = render(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Confirm">
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
    
    //Check we are on Confirm screen.
    expect(screen.getByText('Confirm')).toBeTruthy(); 

    //Get First Name Text Input, set it, and test it
    const firstName = getByTestId('First Name').children[0];
    expect(firstName).toBeTruthy();
    fireEvent.changeText(firstName, 'Devang');
    expect(firstName.props.value).toBe('Devang');

    //Get Middle Name Text Input, set it, and test it
    const middleName = getByTestId('Middle Name').children[0];
    fireEvent.changeText(middleName, "N/A");
    expect(middleName.props.value).toBe('N/A');

     //Get Last Name Text Input, set it, and test it
    const lastName = getByTestId('Last Name').children[0];
    fireEvent.changeText(lastName, "Bhatnagar");
    expect(lastName.props.value).toBe('Bhatnagar');

    //Get Social Security Text Input, set it, and test it
    const socialSecurity = getByTestId('Social Security Number').children[0];
    fireEvent.changeText(socialSecurity, '123456789101234123409123401923840918234asd;lfkjasd;flkjasdf;lkjasdf;ljk');
    expect(socialSecurity.props.value).toBe('123456789');

    //Get Phone Number Text Input, set it, and test it
    const phoneNumber = getByTestId('Mobile Phone Number').children[0];
    fireEvent.changeText(phoneNumber, '51051323200');
    expect(phoneNumber.props.value).toBe('510-513-2320');

    //Get Date Of Birth Input, set it and test it
    const dateOfBirth = getByTestId('Date of Birth').children[0];
    fireEvent.changeText(dateOfBirth, '1220200212341241234123412341324asldkfjas;ldfkja;ldksjf;laskdjf');
    console.log(formatDate(dateOfBirth.props.value));
    // expect(formatDate(dateOfBirth.props.value)).toBe('12/20/2002');

    //Click on the State Dropdown
    const stateDropdown = getByTestId('State Dropdown').children[0];
    fireEvent.press(stateDropdown);
    //Scroll down to Wyoming and click on it.
    fireEvent.scroll(getByTestId('Wyoming'), eventData);
    const wyoming = getByTestId('Wyoming').children[0];
    fireEvent.press(wyoming);
    //Check that the dropdown menu's text now says Wyoming.
    const stateText = getByTestId('State Text').children[0];
    expect(stateText.props.children).toBe('Wyoming');

    //Click on Address 1 Text Input, set it and test it.
    const address1 = getByTestId('Address 1').children[0];
    fireEvent.changeText(address1, '1358 Lennox Lane');
    expect(address1.props.value).toBe('1358 Lennox Lane');

    //Click on Address 2 Text Input, set it and test it.
    const address2 = getByTestId('Address 2').children[0];
    fireEvent.changeText(address2, '3243 Briggs Court');
    expect(address2.props.value).toBe('3243 Briggs Court');

    //Click on City Text Input, set it and test it.
    const city = getByTestId('City').children[0];
    fireEvent.changeText(city, 'Livermore');
    expect(city.props.value).toBe('Livermore');

    //Click on Zip Code Text Input, set it and test it.
    const zip = getByTestId('Zip').children[0];
    fireEvent.changeText(zip, '94550000asdf;lkasdf;lkjasd;lfkj;lkajsdf');
    expect(zip.props.value).toBe('94550');

    //Click on Annual Income Text Input, set it and test it.
    const annualIncome = getByTestId('Annual Income ($)').children[0];
    fireEvent.changeText(annualIncome, '120000');
    expect(annualIncome.props.value).toBe('120000');

    //Click on Next button, and check we are on Approved screen.
    const button = screen.getByText('Next');
    fireEvent.press(button);
    expect(screen.getByText('Approved')).toBeTruthy(); 

  });
});

