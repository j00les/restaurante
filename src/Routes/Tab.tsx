import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useSelector} from 'react-redux';

// import {RootState} from '../store/reducers'; // Adjust the path to your root reducer
import Desert from '../Screens/Desert';
import Drink from '../Screens/Drink';
import Food from '../Screens/Food';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  const navigation = useNavigation<NavigationProp<any>>(); // Update with the appropriate type for your navigation
  const [isBasket, setIsBasket] = useState<boolean | null>(null);
  // const {basket} = useSelector((state: RootState) => state);

  // useEffect(() => {
  //   if (basket.length) {
  //     setIsBasket(true);
  //   } else {
  //     setIsBasket(false);
  //   }
  // }, [basket]);

  return (
    <SafeAreaView className="flex-1">
      <View className="border-b-2 border-t-3 items-center p-3 px-4 bg-blue-500 rounded-t-md flex-row justify-between">
        <Text className="text-base text-white font-semibold">
          Juna's restaurant
        </Text>

        {isBasket && (
          <TouchableOpacity
            onPress={() => navigation.navigate('Order')}
            className="bg-yellow-400 p-2 rounded-md">
            <Text>Order</Text>
          </TouchableOpacity>
        )}
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
        }}
        className="flex-1">
        <Tab.Screen name="Food" component={Food} />
        <Tab.Screen name="Drink" component={Drink} />
        <Tab.Screen name="Desert" component={Desert} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopTab;
