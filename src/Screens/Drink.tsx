import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Card from '../Components/Card';
// import {fetchFoods} from '../store/actions/actions';
// import {RootState} from '../store/reducers'; // Adjust the path to your root reducer
// import {FoodItem} from '../types'; // Assuming you have a type for food items

// Define the type for the item in the FlatList
type RenderItemProps = {
  item: FoodItem;
};

const Drink = () => {
  const dispatch = useDispatch();

  const renderItem = ({item}: RenderItemProps) => {
    return <Card drink={item} />;
  };
  // Define the type for the state
  // const data = useSelector((state: RootState) => state.data);

  // const drinksData = data.filter(el => el.category === 'Drink');

  // useEffect(() => {
  //   dispatch(fetchFoods());
  // }, [dispatch]);

  return (
    <View className="p-3 w-full">
      <Text>flatlist</Text>
      {/* <View className="h-[94%] mx-auto items-center">
        <FlatList
          data={drinksData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} // Assuming each item has a unique id
        />
      </View> */}
    </View>
  );
};

export default Drink;
