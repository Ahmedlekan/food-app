import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

type IconButtonProps = {
    containerStyle:{}
    icon:any
    iconsStyle:{}
    onPress?:()=> void
}

const IconButton = ({containerStyle, icon, iconsStyle, onPress}: IconButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{ ...containerStyle}}
    >
        <Image source={icon} style={{width:30, height:30, tintColor: COLORS.white, ...iconsStyle}} />  
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({})