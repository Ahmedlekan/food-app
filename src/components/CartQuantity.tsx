import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'

type CartQuantityProps = {
    containerStyle?:{}
    iconStyle?:{}
    quantity:number
    onPress:()=> void
}

const CartQuantity = ({containerStyle, iconStyle, quantity, onPress}: CartQuantityProps) => {

  return (
    <TouchableOpacity
        style={{width:40, height: 40, justifyContent:"center", alignItems:"center",
            borderRadius: SIZES.radius, backgroundColor:COLORS.lightOrange2,
            ...containerStyle
        }}
        onPress={onPress}
    >
        <Image source={icons.cart} 
            style={{width:20, height:20, tintColor:COLORS.black, 
            ...iconStyle}} 
        />

        <View style={{
            position:"absolute", top:5, right:5, height:15, width:15,
            justifyContent:"center", alignItems:"center", 
            borderRadius: SIZES.radius, backgroundColor: COLORS.primary
        }}>
            <Text style={{color: COLORS.white, fontSize:10, fontWeight:'500'}}>
                {quantity}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default CartQuantity

const styles = StyleSheet.create({})