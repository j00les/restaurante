import {
  FoodItem,
  AppState,
  FETCH_FOODS,
  INCREMENT_FOOD,
  DECREMENT_FOOD,
  ADD_TO_BASKET,
} from '../../Types';

const initialState: AppState = {
  data: [],
  basket: [],
};

type Action = {
  type: string;
  payload: any;
};

export const reducer = (state = initialState, action: Action): AppState => {
  const {type, payload} = action;

  switch (type) {
    case FETCH_FOODS:
      return {
        ...state,
        data: payload as FoodItem[],
      };

    case INCREMENT_FOOD:
      return {
        ...state,
        basket: state.basket.map((item, index) =>
          index === payload ? {...item, qty: item.qty + 1} : item,
        ),
      };

    case DECREMENT_FOOD:
      return {
        ...state,
        basket: state.basket
          .map((item, index) =>
            index === payload ? {...item, qty: item.qty - 1} : item,
          )
          .filter(item => item.qty > 0), // Remove items with qty < 1
      };

    case ADD_TO_BASKET:
      const item = state.basket.find(el => el.id === payload.id);

      if (item) {
        return {
          ...state,
          basket: state.basket.map(el =>
            el.id === payload.id ? {...el, qty: el.qty + 1} : el,
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, {...payload, qty: 1}],
        };
      }

    default:
      return state;
  }
};
