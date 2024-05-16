import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

type TextIconButtonProps = {
    label: string
    labelStyle:{}
    containerStyle:{}
    onPress:()=> void
    icon:any
    iconStyle:{}
}

const TextIconButton = ({label, labelStyle, 
    containerStyle, onPress, icon, iconStyle}: TextIconButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{flexDirection:"row", alignItems:"center", justifyContent:"center", 
        ...containerStyle}}
    >
      <Text style={{fontSize:16, fontWeight:"500", ...labelStyle}}>
        {label}
      </Text>

      <Image source={icon} style={{height:20, width:20, 
        marginLeft:5, tintColor: COLORS.black, ...iconStyle}}
    />
    </TouchableOpacity>
  )
}

export default TextIconButton

const styles = StyleSheet.create({})