export type RootStackParamList = {
    Home: undefined;
    FoodDetails: { item: FoodItem };
    MyCart:undefined
    MyCard:undefined
    AddCard:undefined
    CheckOut:undefined
    DeliveryStatus:undefined
    Success:undefined
    Map:undefined
  };
 
  export type PriceItem = {
    size: 'S' | 'M' | 'L';
    price: string;
    currency: string;
};

  // Define your FoodItem type
  export type FoodItem = {
    id: string;
    name: string;
    description: string;
    categories: number[]
    isFavourite:boolean
    calories: number;
    imagelink_portrait: any;
    image: any;
    prices: PriceItem[];
    average_rating: number;
    ratings_count: string;
  };

