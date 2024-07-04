import { StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import Header from '../../components/Header'
import { RenderCartList } from '../../components/CartComponents'
import TextButton from '../../components/TextButton'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../../components/IconButton'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar'
import { useProductStore } from '../../store/useStore'

const CartTab = ({navigation}) => {
  const {CartList, calculateCartPrice, CartPrice, incrementCartItemQuantity, 
    decrementCartItemQuantity} = useProductStore()

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  return (

    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.black} />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView]}>
          <View style={styles.ItemContainer}>
          <Header 
            title="MY CART" 
            leftComponent={
              <IconButton
                icon={icons.back}
                containerStyle={{
                  width:40, height:40, justifyContent:"center", alignItems:"center",
                  borderWidth:1, borderRadius: SIZES.radius, borderColor: COLORS.gray2
                }}
                iconsStyle={{
                  width:20, height:20, tintColor: COLORS.gray2
                }}
                onPress={()=> navigation.goBack()}
              />
            }
          />
            
            {CartList.length === 0 ? (
              // <EmptyListAnimation title={'Cart is Empty'} />
              <View></View>
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((data, index)=> (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('FoodDetails', {data});
                    }}
                    key={data.id}
                  >
                    {/* Cart List */}
                    <RenderCartList
                      data={data}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />

                  </TouchableOpacity>
                ) )}
              </View>
            )}

            
          </View>

          {/* {CartList.length != 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '$'}}
            />
          ) : (
            <></>
          )} */}

        </View>
      </ScrollView>
    </View>

    // <View style={{flex:1, backgroundColor: COLORS.white}}>
      
    //   {/* Header */}
    //   <Header 
    //     title="MY CART" 
    //     leftComponent={
    //       <IconButton
    //         icon={icons.back}
    //         containerStyle={{
    //           width:40, height:40, justifyContent:"center", alignItems:"center",
    //           borderWidth:1, borderRadius: SIZES.radius, borderColor: COLORS.gray2
    //         }}
    //         iconsStyle={{
    //           width:20, height:20, tintColor: COLORS.gray2
    //         }}
    //         onPress={()=> navigation.goBack()}
    //       />
    //     }
    //   />

    //   {/* Cart List */}
    //   <RenderCartList/>
    //   {/* Footer */}
    //     <View>
    //       <LinearGradient
    //         start={{x:0, y:0}}
    //         end={{x:0, y:1}}
    //         colors={[COLORS.transparent, COLORS.lightGray1]}
    //         style={{position:"absolute", left:0, right:0, top:-15,
    //             height: Platform.OS === "ios" ? 200 : 50,
    //             borderTopLeftRadius:15, borderTopRightRadius:15
    //         }}
    //       />
    //       <View style={{paddingHorizontal:SIZES.padding,borderTopLeftRadius:20, 
    //         borderTopRightRadius:20, backgroundColor:COLORS.white, paddingBottom:SIZES.padding }}
    //       >
    //         <TextButton
    //             buttonContainerStyle={{
    //                 height:60, marginTop:SIZES.padding, borderRadius:SIZES.radius,
    //                 backgroundColor:COLORS.primary
    //             }}
    //             label='Place your Order'
    //             onPress={()=>{}}
    //         />
    //       </View>
    //   </View>

    // </View>
  )
}

export default CartTab

const styles = StyleSheet.create({
  leftBtn:{
    width: 40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor: COLORS.gray2,
    borderRadius:  SIZES.radius
},
rightBtn:{
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius
},

ScreenContainer: {
  flex: 1,
  backgroundColor: COLORS.black,
},
ScrollViewFlex: {
  flexGrow: 1,
},
ScrollViewInnerView: {
  flex: 1,
  justifyContent: 'space-between',
},
ItemContainer: {
  flex: 1,
},
ListItemContainer: {
  paddingHorizontal: SIZES.padding,
  gap: SIZES.padding,
},

})