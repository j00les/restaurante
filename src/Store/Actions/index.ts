import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {
  FoodItem,
  Order,
  AppActions,
  ADD_TO_BASKET,
  DECREMENT_FOOD,
  FETCH_FOODS,
  INCREMENT_FOOD,
} from '../../Types';

import {BASE_URL, METHODS} from '../../Constants';

const {POST} = METHODS;

export const fetchFoodCreator = (data: FoodItem[]): AppActions => ({
  type: FETCH_FOODS,
  payload: data,
});

export const fetchFoods =
  (): ThunkAction<void, any, unknown, AppActions> =>
  async (dispatch: Dispatch<AppActions>) => {
    try {
      const response = await fetch(`${BASE_URL}/foods`);
      const data: FoodItem[] = await response.json();
      dispatch(fetchFoodCreator(data));
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

export const createOrder =
  (
    basket: FoodItem[],
    order: Order,
  ): ThunkAction<void, any, unknown, AppActions> =>
  async () => {
    const orderData = {
      basket,
      tableNumber: order.tableNum,
      reservee: order.reservee,
      totalOrder: order.totalOrder,
    };

    try {
      await fetch(`${BASE_URL}/orders`, {
        method: POST,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

export const addToBasket = (item: FoodItem): AppActions => ({
  type: ADD_TO_BASKET,
  payload: {
    ...item,
    qty: 1,
  },
});

export const incrementFood = (index: number): AppActions => ({
  type: INCREMENT_FOOD,
  payload: index,
});

export const decrementFood = (index: number): AppActions => ({
  type: DECREMENT_FOOD,
  payload: index,
});
