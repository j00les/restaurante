import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
// import { addToBasket } from '../store/actions/actions';
// import { toRupiah } from '../helpers/helpers';

type Item = {
  name: string;
  imageUrl: string;
  price: number;
};

type CardProps = {
  food?: Item;
  drink?: Item;
  desert?: Item;
};

const Card = (props: CardProps) => {
  const {food, drink, desert} = props;

  const dispatch = useDispatch();
  const {width} = useWindowDimensions();

  const renderDesertCard = (
    <>
      <Image
        className="w-full h-full rounded-lg"
        source={{
          uri: desert?.imageUrl,
        }}
      />

      <View className="absolute left-0 bottom-0 bg-blue-400 blur-md rounded-t-md w-fit shadow-md flex-row justify-between px-1">
        <Text className="text-base text-white">{desert?.name}</Text>
      </View>

      <Text className="absolute left-0 top-0 p-1 text-white font-bold bg-slate-400 border-b-2 border-primary rounded-t-md">
        desert
        {/* {desert && toRupiah(desert.price)} */}
      </Text>

      <View className="absolute right-0 top-0 p-1 bg-slate-400 rounded-t-md border-b-2 border-blue-500">
        {/* <TouchableOpacity onPress={() => dispatch(addToBasket(desert))}>
          <Text className="text-white font-bold">Add to cart</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );

  const renderDrinkCard = (
    <>
      <Image
        className="w-full h-full rounded-lg"
        source={{
          uri: drink?.imageUrl,
        }}
      />

      <View className="absolute left-0 bottom-0 bg-blue-400 blur-md rounded-t-md w-fit shadow-md flex-row justify-between px-1">
        <Text className="text-base text-white">{drink?.name}</Text>
      </View>

      <Text className="absolute left-0 top-0 p-1 text-white font-bold bg-slate-400 border-b-2 border-primary rounded-t-md">
        drink
        {/* {drink && toRupiah(drink.price)} */}
      </Text>

      <View className="absolute right-0 top-0 p-1 bg-slate-400 rounded-t-md border-b-2 border-blue-500">
        {/* <TouchableOpacity onPress={() => dispatch(addToBasket(drink))}>
          <Text className="text-white font-bold">Add to cart</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );

  const renderFoodCard = (
    <>
      <Image
        className="w-full h-full rounded-lg"
        source={{
          uri: food?.imageUrl,
        }}
      />

      <View className="absolute left-0 bottom-0 bg-blue-400 blur-md rounded-t-md w-fit shadow-md flex-row justify-between px-1">
        <Text className="text-base text-white">{food?.name}</Text>
      </View>

      <Text className="absolute left-0 top-0 p-1 text-white font-bold bg-slate-400 border-b-2 border-primary rounded-t-md">
        torupiah
        {/* {food && toRupiah(food.price)} */}
      </Text>

      <View className="absolute right-0 top-0 p-1 bg-slate-400 rounded-t-md border-b-2 border-blue-500">
        {/* <TouchableOpacity onPress={() => dispatch(addToBasket(food))}>
          <Text className="text-white font-bold">Add to cart</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );

  return (
    <View
      style={{width: (width / 100) * 90}}
      className="h-[230px] items-center mb-4 rounded-lg">
      {food && renderFoodCard}
      {drink && renderDrinkCard}
      {desert && renderDesertCard}
    </View>
  );
};

export default Card;
