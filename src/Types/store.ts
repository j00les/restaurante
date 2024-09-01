import {
  ADD_TO_BASKET,
  DECREMENT_FOOD,
  FETCH_FOODS,
  INCREMENT_FOOD,
} from '../Store/Actions/type';
import {FoodItem} from './models';

interface FetchFoodsAction {
  type: typeof FETCH_FOODS;
  payload: FoodItem[];
}

interface IncrementFoodAction {
  type: typeof INCREMENT_FOOD;
  payload: number;
}

interface DecrementFoodAction {
  type: typeof DECREMENT_FOOD;
  payload: number;
}

interface AddToBasketAction {
  type: typeof ADD_TO_BASKET;
  payload: FoodItem & {qty: number};
}

type AppActions =
  | FetchFoodsAction
  | IncrementFoodAction
  | DecrementFoodAction
  | AddToBasketAction;

export type {
  FetchFoodsAction,
  IncrementFoodAction,
  DecrementFoodAction,
  AddToBasketAction,
  AppActions,
};
