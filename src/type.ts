import {ImageProps} from 'react-native';

export type RootStackParamList = {
    Home: undefined;
    FoodDetails: { item: FoodItem };
    CartTab:undefined
    MyCard:undefined
    AddCard:undefined
    CheckOut:undefined
    DeliveryStatus:undefined
    Success:undefined
    Map:undefined
  };
 
  export type PriceItem = {
    size: string
    price: string;
    currency: string;
    
};

  // Define your FoodItem type
  export type FoodItem = {
    id: string;
    name: string;
    description: string;
    isFavourite:boolean
    calories: number;
    category: string,
    image: ImageProps;
    prices: PriceItem[];
    average_rating: number;
    ratings_count: string;
  };

export interface FoodList {
    id: number;
    name: string;
    list: FoodItem[];
}

export interface Category {
  id: number;
  name: string;
  icon: any;
  foodList:FoodItem[]
}
