import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

type TextSocialIconButtonProps = {
    label: string
    labelStyle:{}
    containerStyle:{}
    onPress:()=> void
    icon:any
    iconStyle:{}
    iconPosition?: string
}

const TextSocialIconButton = ({label, labelStyle, iconPosition,
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

      <Text style={{fontSize:16, fontWeight:"500", ...labelStyle}}>
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