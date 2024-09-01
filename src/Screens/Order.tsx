import React, {useState} from 'react';
import {FlatList, Text, TextInput, ToastAndroid, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import {toRupiah} from '../../helpers/helpers';
// import {
//   createOrder,
//   decrementFood,
//   incrementFood,
// } from '../store/actions/actions';
// import {RootState} from '../store/reducers'; // Adjust the path to your root reducer
// import {BasketItem} from '../types'; // Assuming you have a type for basket items

const Order = () => {
  const {basket} = useSelector((state: RootState) => state);
  const [tableNum, onChangeTableNum] = useState<number>(0);
  const [reservee, onChangeReservee] = useState<string>('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  let totalOrder = 0;
  let temporaryPriceValue: number[] = [];

  // const handleSubmit = () => {
  //   dispatch(createOrder(basket, {tableNum, reservee, totalOrder}))
  //     .then(() => {
  //       navigation.navigate('Food');
  //       ToastAndroid.showWithGravity(
  //         'Order success!',
  //         ToastAndroid.SHORT,
  //         ToastAndroid.CENTER,
  //       );
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  return (
    <View className="p-4">
      <Text className="text-lg font-bold uppercase">Your order</Text>
      {/* {basket.map((el: BasketItem, index: number) => {
        const price = el.qty * el.price;

        temporaryPriceValue.push(price);
        const finalPriceValue = temporaryPriceValue.reduce(
          (previous, current) => {
            return previous + current;
          },
          0,
        );

        totalOrder = finalPriceValue;

        return (
          <View key={`${index}-order`}>
            <View className="flex-row justify-between border-b mt-1">
              <View className="mt-1">
                <Text className="text-base font-semibold">{el.name}</Text>
                <Text>{toRupiah(el.qty * el.price)}</Text>
              </View>

              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={() => dispatch(decrementFood(index))}
                  className="ml-2 rounded-sm border">
                  <Entypo name="minus" size={13} color="black" />
                </TouchableOpacity>

                <Text className="text-base mx-2 font-semibold">{el.qty}</Text>

                <TouchableOpacity
                  onPress={() => dispatch(incrementFood(index))}
                  className="rounded-sm border">
                  <Entypo name="plus" size={13} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })} */}
      {/* <View className="mt-3">
        <View>
          <Text>Your Table :</Text>

          <TextInput
            onChangeText={onChangeTableNum}
            value={tableNum.toString()}
            keyboardType="numeric"
            className="border rounded-md py-1 px-2"
            placeholder="0"
          />
        </View>

        <View className="mt-2">
          <Text>On Behalf of Mr/Ms: </Text>
          <TextInput
            placeholder="Mr or Ms"
            onChangeText={onChangeReservee}
            value={reservee}
            className="border rounded-md py-1 px-2"
          />
        </View>
      </View> */}

      <View className="self-end mt-3">
        <Text className="text-base font-semibold">Total Price</Text>
        {/* <Text className="border rounded-md p-1">{toRupiah(totalOrder)}</Text> */}
      </View>

      <TouchableOpacity
        // onPress={handleSubmit}
        className="rounded-md p-1 bg-yellow-400 w-fit mt-3">
        <Text className="text-center"> Make Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Order;
