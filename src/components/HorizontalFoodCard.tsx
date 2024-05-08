import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'

type HorizontalFoodCardProps = {
    containerStyle:any
    imageStyle:any
    item:any
    onPress: ()=> void
}

const HorizontalFoodCard = ({containerStyle, imageStyle, item, onPress}: HorizontalFoodCardProps) => {

  return (
    <TouchableOpacity style={{flexDirection: "row",borderRadius: SIZES.radius,
        backgroundColor:COLORS.lightGray2, ...containerStyle}} 
        onPress={onPress}
    >
        <Image source={item.image} style={imageStyle} />

        <View style={{flex: 1}}>
            <Text style={{fontSize:17, fontWeight:'500'}}>{item.name}</Text>
            <Text style={{color: COLORS.darkGray}}>{item.description}</Text>
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