import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { COLORS, SIZES } from '../../constants'
import SteperInput from './SteperInput'
import TextButton from '../TextButton'
import { FoodItem } from '../../type'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../type'
import { StackNavigationProp } from '@react-navigation/stack';
import { PriceItem } from '../../type'

type MyCartScreenProp = StackNavigationProp<RootStackParamList, 'MyCart'>;

type RenderFooterProps = {
  footerItem: FoodItem
  price: PriceItem
  setPrice: (item)=> void
}

const RenderFooter = ({footerItem, price}:RenderFooterProps) => {
  const navigation = useNavigation<MyCartScreenProp>()

  return (
    <View style={{
        flexDirection:"row", alignItems:"center", height:120, 
        paddingHorizontal:SIZES.padding, paddingBottom:SIZES.radius
    }}>
      <View style={styles.PriceContainer}>
          <Text style={styles.PriceTitle}>Price</Text>
          <Text style={styles.PriceText}>
            {price.currency} <Text style={styles.Price}> {price.price} </Text>
          </Text>
        </View>
      
      <TextButton
        buttonContainerStyle={{
          flex:3, height:60, marginLeft:SIZES.radius,
          paddingHorizontal: SIZES.radius, borderRadius:SIZES.radius,
        }}
        label='Add to Cart'
        onPress={()=> navigation.push("MyCart")}
      />
    </View>
  )
}

export default RenderFooter

const styles = StyleSheet.create({
  PriceContainer: {
    alignItems: 'center',
    width: 100,
    backgroundColor:COLORS.lightGray2,
    flex:2, 
    height:60,
    borderRadius:SIZES.radius,
  },
  PriceTitle: {
    fontSize: 16,
    fontWeight:"500",
    color: COLORS.darkGray,
  },
  PriceText: {
    fontSize: 20,
    fontWeight:"500",
    color: COLORS.primary,
  },
  Price: {
    color: COLORS.darkGray,
  },
})