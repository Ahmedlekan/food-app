import React from 'react';
import {StyleSheet,Text,View,ImageProps,Image,TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../../constants';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { FoodItem } from '../../type';

interface RenderCartListProps {
    data:any
    incrementCartItemQuantityHandler:(id: string, size: string)=> void
    decrementCartItemQuantityHandler:(id: string, size: string)=> void
}

const RenderCartList = ({data, incrementCartItemQuantityHandler, 
  decrementCartItemQuantityHandler}: RenderCartListProps) => {
  
    const {prices, name, image, } = data

        return (
            <View>
              
              {prices?.length !== 1 ? (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={[COLORS.gray, COLORS.black]}
                  style={styles.CartItemLinearGradient}
                >
                  <View style={styles.CartItemRow}>
                    <Image source={image} style={styles.CartItemImage} />
                    <View style={styles.CartItemInfo}>
                      <View>
                        <Text style={styles.CartItemTitle}>{name}</Text>
                      </View>
                    </View>
                  </View>

                  {prices?.map((data: any, index: any) => (
                    <View
                      key={index.toString()}
                      style={styles.CartItemSizeRowContainer}>
                      
                      <View style={styles.CartItemSizeValueContainer}>
                        <View style={styles.SizeBox}>
                          <Text style={styles.SizeText}>
                            {data.size}
                          </Text>
                        </View>
                        <Text style={styles.SizeCurrency}>
                          {data.currency}
                          <Text style={styles.SizePrice}> {data.price}</Text>
                        </Text>
                      </View>
                      
                      <View style={styles.CartItemSizeValueContainer}>
                        <TouchableOpacity
                          style={styles.CartItemIcon}
                          onPress={() => {
                            decrementCartItemQuantityHandler(data.id, data.size);
                          }}>
                          <AntDesign
                            name="minus"
                            color={COLORS.white}
                            size={SIZES.radius}
                          />
                        </TouchableOpacity>
                        <View style={styles.CartItemQuantityContainer}>
                          <Text style={styles.CartItemQuantityText}>
                            {data.quantity}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.CartItemIcon}
                          onPress={() => {
                            incrementCartItemQuantityHandler(data.id, data.size);
                          }}>
                          <Ionicons
                            name="add"
                            color={COLORS.white}
                            size={SIZES.radius}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </LinearGradient>

              ) : (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={[COLORS.gray, COLORS.black]}
                  style={styles.CartItemSingleLinearGradient}
                >
                  <View>
                    <Image
                      source={image}
                      style={styles.CartItemSingleImage}
                    />
                  </View>
                  
                  <View style={styles.CartItemSingleInfoContainer}>
                    <View>
                      <Text style={styles.CartItemTitle}>{name}</Text>
                    </View>

                    <View style={styles.CartItemSingleSizeValueContainer}>
                      <View style={styles.SizeBox}>
                        <Text style={styles.SizeText}>
                          {prices[0].size}
                        </Text>
                      </View>

                      <Text style={styles.SizeCurrency}>
                        {prices[0].currency}
                        <Text style={styles.SizePrice}> {prices[0].price}</Text>
                      </Text>
                    </View>
                    
                    <View style={styles.CartItemSingleQuantityContainer}>
                      <TouchableOpacity
                        style={styles.CartItemIcon}
                        onPress={() => {
                          decrementCartItemQuantityHandler(prices.id, prices[0].size);
                        }}>
                        <AntDesign
                          name="minus"
                          color={COLORS.white}
                            size={SIZES.radius}
                        />
                      </TouchableOpacity>
                      
                      <View style={styles.CartItemQuantityContainer}>
                        <Text style={styles.CartItemQuantityText}>
                          {prices[0].quantity}
                        </Text>
                      </View>
                      
                      <TouchableOpacity
                        style={styles.CartItemIcon}
                        onPress={() => {
                          incrementCartItemQuantityHandler(prices.id, prices[0].size);
                        }}>
                        <Ionicons
                          name="add"
                          color={COLORS.white}
                            size={SIZES.radius}
                        />
                      </TouchableOpacity>

                    </View>
                  </View>
                </LinearGradient>
              )}
            </View>
          );
}

export default RenderCartList

const styles = StyleSheet.create({
    CartItemLinearGradient: {
        flex: 1,
        gap: 12,
        padding: SIZES.radius,
        borderRadius: SIZES.padding,
      },
      CartItemRow: {
        flexDirection: 'row',
        gap: 12,
        flex: 1,
      },
      CartItemImage: {
        height: 130,
        width: 130,
        borderRadius: SIZES.font,
      },
      CartItemInfo: {
        flex: 1,
        paddingVertical: 4,
        justifyContent: 'space-between',
      },
      CartItemTitle: {
        fontSize: 18,
        color: COLORS.white,
      },
      CartItemSubtitle: {
        fontSize: 12,
        color: COLORS.lightGray1,
      },
      
      CartItemSizeRowContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      CartItemSizeValueContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      SizeBox: {
        backgroundColor: COLORS.black,
        height: 40,
        width: 100,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
      },
      SizeText: {
        color: COLORS.lightGray1,
      },
      SizeCurrency: {
        fontSize: 18,
        color: COLORS.primary,
      },
      SizePrice: {
        color: COLORS.white,
      },
      CartItemIcon: {
        backgroundColor: COLORS.transparentPrimray,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
      },
      CartItemQuantityContainer: {
        backgroundColor: COLORS.black,
        width: 80,
        borderRadius: SIZES.radius,
        borderWidth: 2,
        borderColor: COLORS.transparentPrimray,
        alignItems: 'center',
        paddingVertical:4,
      },
      CartItemQuantityText: {
        fontSize: 16,
        color: COLORS.white,
      },
      CartItemSingleLinearGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.radius,
        gap: 12,
        borderRadius: SIZES.padding,
      },
      CartItemSingleImage: {
        height: 150,
        width: 150,
        borderRadius: SIZES.font,
      },
      CartItemSingleInfoContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
      },
      CartItemSingleSizeValueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      CartItemSingleQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
})










// import { StyleSheet, Text, View, Image } from 'react-native'
// import React, {useState} from 'react'
// import { COLORS, dummyData, icons, SIZES } from '../../constants'
// import { SwipeListView } from 'react-native-swipe-list-view'
// import SteperInput from '../FoodDetails/SteperInput'
// import IconButton from '../IconButton'

// const RenderCartList = () => {
//   const [myCartList, setmyCartList] = useState(dummyData.myCart)

//   const updateQuantityHandler = (newQty, id)=>{
//     const myNewCartList = myCartList.map( (cl)=> (
//       cl.id === id ? {...cl, qty:newQty} : cl
//     ) ) 

//     setmyCartList(myNewCartList)
//   }

//   const removeMyCartHandler = (id)=>{
//     let myNewCartList = [...myCartList]
//     const myCartListIndex = myNewCartList.findIndex(cart => cart.id === id)

//     myNewCartList.splice(myCartListIndex, 1)
//     setmyCartList(myNewCartList)
//   }

//   return (
//     <SwipeListView
//       data={myCartList}
//       keyExtractor={item => `${item.id}`}
//       contentContainerStyle={{
//         marginTop: SIZES.radius, paddingHorizontal: SIZES.padding,
//         paddingBottom: SIZES.padding * 2, 
//       }}
//       disableRightSwipe={true}
//       rightOpenValue={-75}
//       renderItem={(data, rowMap)=> (
//         <View style={{backgroundColor:COLORS.lightGray2, ...styles.cartItemContainer}}>
//           <View style={{height:100, width:90, marginLeft:-10}}>
//             <Image
//               source={data.item.image}
//               resizeMode='contain'
//               style={{width:"100%", height:"100%", position:"absolute", top:10}}
//             />
//           </View>
//           <View style={{flex:1}}>
//             <Text style={{fontSize:17}}>{data.item.name}</Text>
//             <Text style={{color:COLORS.primary}}>{data.item.price}</Text>
//           </View>

//           <SteperInput
//             containerStyle={{height:50, width:125, backgroundColor:COLORS.white}}
//             value={data.item.qty}
//             onAdd={()=> updateQuantityHandler(data.item.qty + 1, data.item.id)}
//             onMinus={()=> {
//               if(data.item.qty > 1){
//                 updateQuantityHandler(data.item.qty - 1, data.item.id)
//               }
//             }}
//           />
//           <View>
//     </View>

//         </View>
//       )}

//       renderHiddenItem={(data, rowMap)=>(
//         <IconButton
//           containerStyle={{
//             flex:1, justifyContent:"flex-end",backgroundColor: COLORS.primary, ...styles.cartItemContainer
//           }}
//           icon={icons.delete_icon}
//           iconsStyle={{marginRight:10}}
//           onPress={()=> removeMyCartHandler(data.item.id)}
//         />
//       )}
      
//     />
//   )
// }

// export default RenderCartList

// const styles = StyleSheet.create({
//   cartItemContainer:{
//     flexDirection:'row',
//     alignItems:"center",
//     marginTop:SIZES.radius,
//     paddingHorizontal:SIZES.radius,
//     borderRadius:SIZES.radius,
//     height:100, 
//   },

// })