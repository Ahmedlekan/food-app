import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../constants'

type RatingIconProps = {
  rating: number
  iconsStyle: {}
  activeColor?:any
  inactiveColor?: any
}

const Rating = ({rating, iconsStyle, activeColor= COLORS.orange,
   inactiveColor=COLORS.lightOrange3}: RatingIconProps) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Image 
        source={icons.star}
        style={{tintColor:rating >= 1 ? activeColor : inactiveColor, 
          height:15, width:15, ...iconsStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{tintColor:rating >= 2 ? activeColor : inactiveColor, 
          height:15, width:15, ...iconsStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{tintColor:rating >= 3 ? activeColor : inactiveColor, 
          height:15, width:15, ...iconsStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{tintColor:rating >= 4 ? activeColor : inactiveColor, 
          height:15, width:15, ...iconsStyle
        }}
      />
      <Image 
        source={icons.star}
        style={{tintColor:rating >= 5 ? activeColor : inactiveColor, 
          height:15, width:15, ...iconsStyle
        }}
      />
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})