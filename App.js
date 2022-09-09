/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {OperationProvider, useOperation} from './app/context/OperationContext';
import CalculatorScreen from './app/screens/CalculatorScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UnitConversionScreen from './app/screens/UnitConversionScreen';
import {UnitConversionProvider} from './app/context/UnitConversionContext';

const Stack = createStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
    flex: 1,
  };

  return (
    <OperationProvider>
      <UnitConversionProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="CalculatorScreen"
              component={CalculatorScreen}
            />
            <Stack.Screen
              options={{
                headerTitle: 'Unit Conversion',
                headerStyle: {backgroundColor: '#000'},
                headerTintColor: '#fff',
              }}
              name="UnitConversionScreen"
              component={UnitConversionScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UnitConversionProvider>
    </OperationProvider>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: RFPercentage(1),
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default App;
