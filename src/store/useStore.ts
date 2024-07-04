import { create } from 'zustand';
import { produce } from 'immer';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dummyData } from '../constants';
import { FoodList } from '../type';
import { FoodItem } from '../type';

interface StoreState {
    Products: any;
    CartPrice: number;
    FavoritesList: FoodItem[];
    CartList: FoodItem[];
    OrderHistoryList: FoodItem[];
    addToCart: (product: FoodItem[]) => void;
    calculateCartPrice:() => void;
    addToFavoriteList: (type: string, id: string)=> void
    deleteFromFavoriteList: (type: string, id: string)=>void
    incrementCartItemQuantity: (id: string, size: string)=> void
    decrementCartItemQuantity: (id: string, size: string)=>void
  }

const STORAGE_KEY = 'food-app';

export const useProductStore = create<StoreState>()(
    persist(
        (set) => ({
            Products: dummyData.menu,
            CartPrice: 0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: [],
            addToCart: (cartItem: any) =>
                set(
                    produce((state) => {
                        // Find an existing item in the cart with the same id
                    const existingCartItem = state.CartList.find((item: any) => item.id === cartItem.id);

                    if (existingCartItem) {
                        // Ensure prices property is an array or initialize it with an array containing the existing price
                        existingCartItem.prices = existingCartItem.prices || [existingCartItem.price];

                        // Find the index of the price with the same size in the existingCartItem.prices array
                        const existingSizeIndex = existingCartItem.prices.findIndex(
                        (price: any) => price.size === cartItem.prices[0].size
                        );

                        if (existingSizeIndex !== -1) {
                        // If the price with the same size exists, increment its quantity
                        existingCartItem.prices[existingSizeIndex].quantity++;
                        } else {
                        // If the price with the same size doesn't exist, add the new price to existingCartItem.prices
                        existingCartItem.prices.push(cartItem.prices[0]);
                        // Sort prices in descending order based on size
                        existingCartItem.prices.sort((a: any, b: any) => b.size.localeCompare(a.size));
                        }
                    } else {
                        // If the item doesn't exist in the cart, add it with the new price
                        state.CartList.push(cartItem);
                    }
                })
            ),
            
            calculateCartPrice: () =>
                set(
                    produce((state) => {
                    // Check if state.CartList is defined and is an array
                    if (state.CartList && Array.isArray(state.CartList)) {
                        let totalprice = 0;
    
                        for (let i = 0; i < state.CartList.length; i++) {
                        // Check if state.CartList[i] is defined and has prices
                        if (state.CartList[i] && state.CartList[i].prices) {
                            let tempprice = 0;
    
                            for (let j = 0; j < state.CartList[i].prices.length; j++) {
                            // Check if state.CartList[i].prices[j] is defined
                            if (state.CartList[i].prices[j]) {
                                tempprice +=
                                parseFloat(state.CartList[i].prices[j].price) *
                                state.CartList[i].prices[j].quantity;
                            }
                            }
    
                            state.CartList[i].ItemPrice = tempprice.toFixed(2).toString();
                            totalprice = totalprice + tempprice;
                        }
                        }
    
                        state.CartPrice = totalprice.toFixed(2).toString();
                    } else {
                        // Handle the case where state.CartList is undefined or not an array
                        console.error('Invalid state.CartList:', state.CartList);
                    }
                    })
            ),

            addToFavoriteList: (type: string, id: string) =>
                set(
                    produce((state) => {
                        const list = type === "Coffee" ? state.CoffeeList : type === "Bean" ? state.BeanList : [];
                        const favoriteList = type === "Coffee" || type === "Bean" ? state.FavoritesList : [];
                        const item = list.find((item: any) => item.id === id);

                        if (item) {
                        item.favourite = !item.favourite;
                
                        if (item.favourite) {
                            favoriteList.unshift(item);
                        } else {
                            const index = favoriteList.findIndex((fav: any) => fav.id === id);
                            if (index !== -1) {
                            favoriteList.splice(index, 1);
                            }
                        }
                        }
                    })
            ),

            deleteFromFavoriteList: (type: string, id: string) => (
                set(produce( (state)=> {
                    // Determine the appropriate list based on the 'type'
                    const list = type === "Coffee" ? state.CoffeeList : type === "Bean" ? state.BeanList : []
                    // Find the index of the item in the specified list
                    const itemIndex = list.findIndex( (item:any)=> item.id === id )
                    // Toggle the 'favourite' property of the item if it exists
                    if (itemIndex !== -1){
                        list[itemIndex].favourite = !list[itemIndex].favourite
                    } 
                    // Find the index of the item in 'FavoritesList'
                    const spliceIndex = state.FavoritesList.findIndex((item:any)=> item.id === id)
                    // Remove the item from 'FavoritesList' if it exists
                    if(spliceIndex !== -1){
                        state.FavoritesList.splice(spliceIndex, 1)
                    }
                } ))
             ),

             incrementCartItemQuantity: (id: string, size: string) =>
                set(
                produce(state => {
                    for (let i = 0; i < state.CartList.length; i++) {
                    if (state.CartList[i].id == id) {
                        for (let j = 0; j < state.CartList[i].prices.length; j++) {
                        if (state.CartList[i].prices[j].size == size) {
                            state.CartList[i].prices[j].quantity++;
                            break;
                        }
                        }
                    }
                    }
                }),
            ),

            decrementCartItemQuantity: (id: string, size: string) =>
                set(
                produce(state => {
                    for (let i = 0; i < state.CartList.length; i++) {
                    if (state.CartList[i].id == id) {
                        for (let j = 0; j < state.CartList[i].prices.length; j++) {
                        if (state.CartList[i].prices[j].size == size) {
                            if (state.CartList[i].prices.length > 1) {
                            if (state.CartList[i].prices[j].quantity > 1) {
                                state.CartList[i].prices[j].quantity--;
                            } else {
                                state.CartList[i].prices.splice(j, 1);
                            }
                            } else {
                            if (state.CartList[i].prices[j].quantity > 1) {
                                state.CartList[i].prices[j].quantity--;
                            } else {
                                state.CartList.splice(i, 1);
                            }
                            }
                            break;
                        }
                        }
                    }
                    }
                }),
            ),


        }),
        {
            name: STORAGE_KEY, 
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);




      // addToCart: (cartItem: any) =>
            //     set(
            //         produce((state) => {
            //             // Find an existing item in the cart with the same id
            //         const existingCartItem = state.CartList.find((item: any) => item.id === cartItem.id);

            //         if (existingCartItem) {
            //             // Ensure prices property is an array or initialize it with an array containing the existing price
            //             existingCartItem.prices = existingCartItem.prices || [existingCartItem.price];

            //             // Find the index of the price with the same size in the existingCartItem.prices array
            //             const existingSizeIndex = existingCartItem.prices.findIndex(
            //             (price: any) => price.size === cartItem.prices[0].size
            //             );

            //             if (existingSizeIndex !== -1) {
            //             // If the price with the same size exists, increment its quantity
            //             existingCartItem.prices[existingSizeIndex].quantity++;
            //             } else {
            //             // If the price with the same size doesn't exist, add the new price to existingCartItem.prices
            //             existingCartItem.prices.push(cartItem.prices[0]);
            //             // Sort prices in descending order based on size
            //             existingCartItem.prices.sort((a: any, b: any) => b.size.localeCompare(a.size));
            //             }
            //         } else {
            //             // If the item doesn't exist in the cart, add it with the new price
            //             state.CartList.push(cartItem);
            //         }
            //     })
            // ),

            // calculateCartPrice: () =>
            // set(
            //     produce((state) => {
            //     // Check if state.CartList is defined and is an array
            //     if (state.CartList && Array.isArray(state.CartList)) {
            //         let totalprice = 0;

            //         for (let i = 0; i < state.CartList.length; i++) {
            //         // Check if state.CartList[i] is defined and has prices
            //         if (state.CartList[i] && state.CartList[i].prices) {
            //             let tempprice = 0;

            //             for (let j = 0; j < state.CartList[i].prices.length; j++) {
            //             // Check if state.CartList[i].prices[j] is defined
            //             if (state.CartList[i].prices[j]) {
            //                 tempprice +=
            //                 parseFloat(state.CartList[i].prices[j].price) *
            //                 state.CartList[i].prices[j].quantity;
            //             }
            //             }

            //             state.CartList[i].ItemPrice = tempprice.toFixed(2).toString();
            //             totalprice = totalprice + tempprice;
            //         }
            //         }

            //         state.CartPrice = totalprice.toFixed(2).toString();
            //     } else {
            //         // Handle the case where state.CartList is undefined or not an array
            //         console.error('Invalid state.CartList:', state.CartList);
            //     }
            //     })
            // ),

            //  addToFavoriteList: (type: string, id: string) =>
            //     set(
            //         produce((state) => {
            //             const list = type === "Coffee" ? state.CoffeeList : type === "Bean" ? state.BeanList : [];
            //             const favoriteList = type === "Coffee" || type === "Bean" ? state.FavoritesList : [];
            //             const item = list.find((item: any) => item.id === id);

            //             if (item) {
            //             item.favourite = !item.favourite;
                
            //             if (item.favourite) {
            //                 favoriteList.unshift(item);
            //             } else {
            //                 const index = favoriteList.findIndex((fav: any) => fav.id === id);
            //                 if (index !== -1) {
            //                 favoriteList.splice(index, 1);
            //                 }
            //             }
            //             }
            //         })
            //     ),

            //  deleteFromFavoriteList: (type: string, id: string) => (
            //     set(produce( (state)=> {
            //         // Determine the appropriate list based on the 'type'
            //         const list = type === "Coffee" ? state.CoffeeList : type === "Bean" ? state.BeanList : []
            //         // Find the index of the item in the specified list
            //         const itemIndex = list.findIndex( (item:any)=> item.id === id )
            //         // Toggle the 'favourite' property of the item if it exists
            //         if (itemIndex !== -1){
            //             list[itemIndex].favourite = !list[itemIndex].favourite
            //         } 
            //         // Find the index of the item in 'FavoritesList'
            //         const spliceIndex = state.FavoritesList.findIndex((item:any)=> item.id === id)
            //         // Remove the item from 'FavoritesList' if it exists
            //         if(spliceIndex !== -1){
            //             state.FavoritesList.splice(spliceIndex, 1)
            //         }
            //     } ))
            //  ),

            //  incrementCartItemQuantity: (id: string, size: string) =>
            //     set(
            //     produce(state => {
            //         for (let i = 0; i < state.CartList.length; i++) {
            //         if (state.CartList[i].id == id) {
            //             for (let j = 0; j < state.CartList[i].prices.length; j++) {
            //             if (state.CartList[i].prices[j].size == size) {
            //                 state.CartList[i].prices[j].quantity++;
            //                 break;
            //             }
            //             }
            //         }
            //         }
            //     }),
            // ),

            // decrementCartItemQuantity: (id: string, size: string) =>
            //     set(
            //     produce(state => {
            //         for (let i = 0; i < state.CartList.length; i++) {
            //         if (state.CartList[i].id == id) {
            //             for (let j = 0; j < state.CartList[i].prices.length; j++) {
            //             if (state.CartList[i].prices[j].size == size) {
            //                 if (state.CartList[i].prices.length > 1) {
            //                 if (state.CartList[i].prices[j].quantity > 1) {
            //                     state.CartList[i].prices[j].quantity--;
            //                 } else {
            //                     state.CartList[i].prices.splice(j, 1);
            //                 }
            //                 } else {
            //                 if (state.CartList[i].prices[j].quantity > 1) {
            //                     state.CartList[i].prices[j].quantity--;
            //                 } else {
            //                     state.CartList.splice(i, 1);
            //                 }
            //                 }
            //                 break;
            //             }
            //             }
            //         }
            //         }
            //     }),
            // ),

            // addToOrderHistoryListFromCart: () =>
            //     set(
            //     produce(state => {
            //         let temp = state.CartList.reduce(
            //         (accumulator: number, currentValue: any) =>
            //             accumulator + parseFloat(currentValue.ItemPrice),
            //         0,
            //         );
            //         if (state.OrderHistoryList.length > 0) {
            //         state.OrderHistoryList.unshift({
            //             OrderDate:
            //             new Date().toDateString() +
            //             ' ' +
            //             new Date().toLocaleTimeString(),
            //             CartList: state.CartList,
            //             CartListPrice: temp.toFixed(2).toString(),
            //         });
            //         } else {
            //         state.OrderHistoryList.push({
            //             OrderDate:
            //             new Date().toDateString() +
            //             ' ' +
            //             new Date().toLocaleTimeString(),
            //             CartList: state.CartList,
            //             CartListPrice: temp.toFixed(2).toString(),
            //         });
            //         }
            //         state.CartList = [];
            //     }),
            // ),
