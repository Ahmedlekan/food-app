import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

type TextSocialIconButtonProps = {
    label: string
    containerStyle:{}
    onPress:()=> void
    icon:any
    iconStyle:{}
    iconPosition?: string
}

const TextSocialIconButton = ({label, iconPosition,
    containerStyle, onPress, icon, iconStyle}: TextSocialIconButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{flexDirection:"row", alignItems:"center", justifyContent:"center", 
        ...containerStyle}}
    >
        {iconPosition == "LEFT" && (
            <Image source={icon} style={{height:20, width:20, 
                marginLeft:5, tintColor: COLORS.black, ...iconStyle}}
            />  
        )}

      <Text style={{color: COLORS.white, fontSize:16, fontWeight:"500", marginLeft: SIZES.radius}}>
        {label}
      </Text>

        {iconPosition == "RIGHT" && (
            <Image source={icon} style={{height:20, width:20, 
                marginLeft:5, tintColor: COLORS.black, ...iconStyle}}
            />  
        )}
    </TouchableOpacity>
  )
}

export default TextSocialIconButton

const styles = StyleSheet.create({})