import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTab from './Tab';
import Order from '../Screens/Order';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TopTab} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

export default MainStack;
