import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../constants'
import Rating from '../Rating'

const RenderRestaurants = () => {
  return (
    <View style={{flexDirection:"row", alignItems:"center",
        marginVertical: SIZES.padding, paddingHorizontal: SIZES.padding}}
    >
        <Image source={images.profile} 
            style={{width:50, height:50, borderRadius:SIZES.radius}} 
        />

        <View style={{flex:1, marginLeft:SIZES.radius, justifyContent:"center"}}>
            <Text style={{fontWeight:"500", fontSize:18}}>Toyota Food</Text>
            <Text style={{color: COLORS.gray}}>1.2km from you</Text>
        </View>

        <Rating
          rating={4}
          iconsStyle={{marginLeft:4}}
        />

    </View>
  )
}

export default RenderRestaurants

const styles = StyleSheet.create({})