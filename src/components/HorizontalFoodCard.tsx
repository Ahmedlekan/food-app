import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'
import { truncateText } from '../utils/Utils'

type HorizontalFoodCardProps = {
    item:any
    onPress: ()=> void
}

const HorizontalFoodCard = ({item, onPress}: HorizontalFoodCardProps) => {
    const shortenedDescription = truncateText(item.description, 50);
  return (
    <TouchableOpacity style={{flexDirection: "row",borderRadius: SIZES.radius,
        backgroundColor:COLORS.lightGray2, height:130,alignItems:'center',
        marginHorizontal:SIZES.padding,marginBottom: SIZES.radius}} 
        onPress={onPress}
    >
        <Image source={item.image} style={{marginTop: 20,height:110,width:110}} />

        <View style={{flex: 1}}>
            <Text style={{fontSize:17, fontWeight:'500'}}>{item.name}</Text>
            <Text style={{color: COLORS.darkGray}}>{shortenedDescription}</Text>
            <Text style={{marginTop:SIZES.base, fontWeight:'700', fontSize:20}}>{item.price}</Text>
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