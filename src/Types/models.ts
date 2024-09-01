interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface AppState {
  data: FoodItem[];
  basket: (FoodItem & {id: number; qty: number})[];
}

interface Order {
  tableNum: number;
  reservee: string;
  totalOrder: number;
}

export type {FoodItem, AppState, Order};
