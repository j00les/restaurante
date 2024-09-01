export const FETCH_FOODS = 'foods/fetch' as const;
export const INCREMENT_FOOD = 'foods/increment' as const;
export const DECREMENT_FOOD = 'foods/decrement' as const;
export const ADD_TO_BASKET = 'foods/addtobasket' as const;

export type ActionTypes =
  | typeof FETCH_FOODS
  | typeof INCREMENT_FOOD
  | typeof DECREMENT_FOOD
  | typeof ADD_TO_BASKET;
