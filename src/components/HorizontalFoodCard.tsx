import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'
import { truncateText } from '../utils/Utils'
import { PriceItem } from '../type'
import { FoodItem } from '../type'
import { FoodList } from '../type'

type HorizontalFoodCardProps = {
    item: any
    onPress: (item: FoodItem) => void;
    price: PriceItem
}

const HorizontalFoodCard = ({item, onPress, price}: HorizontalFoodCardProps) => {
    const shortenedDescription = truncateText(item.description, 20);
  return (
    <TouchableOpacity style={{flexDirection: "row",borderRadius: SIZES.radius,
        backgroundColor:COLORS.lightGray2, height:130,alignItems:'center',
        marginHorizontal:SIZES.padding, marginBottom: SIZES.radius, paddingRight :SIZES.base }} 
        onPress={()=> onPress(item)}
    >
   
        <View style={{flexDirection:"row", justifyContent:"center", 
            alignItems:"center", marginTop: 20, gap:10}}
        >
            <Image source={item.image} style={{height:110,width:110, marginTop: 20}} />

            <View style={{ gap:10}}>
                <Text style={{fontSize:17, fontWeight:'500'}}>{item.name}</Text>
                <Text style={{color: COLORS.darkGray}}>{shortenedDescription}</Text>
                <Text style={{fontWeight:'700', fontSize:20}}>{price.price}</Text>
            </View>

        </View>

        <View style={{flexDirection:"row", position:"absolute", top:5, right:SIZES.radius}}>
            <Image source={icons.calories} style={{width:30, height:30}} />
            <Text style={{color:COLORS.darkGray2, fontSize: 15}}>{item.calories} calories</Text>
        </View>
    </TouchableOpacity>
  )
}

export default HorizontalFoodCard

const styles = StyleSheet.create({
})