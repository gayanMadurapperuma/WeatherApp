import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../features/login/container/LoginContainer';
import WeatherContainer from '../features/weather/container/WeatherContainer';
import {navigationRef} from './RootNavigation';

const Stack = createStackNavigator();

const Navigator = (props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Weather"
          component={WeatherContainer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
