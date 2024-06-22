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
  
  // Define your FoodItem type
  export type FoodItem = {
    id: string;
    name: string;
    description: string;
    categories: number[]
    isFavourite:boolean
    price: string;
    calories: number;
    image: any;
  };