import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

type TextButtonProps = {
    label?: string
    labelStyle?: {}
    buttonContainerStyle: {}
    onPress?:()=> void
    disabled?: any
}

const TextButton = ({label, labelStyle, buttonContainerStyle, 
  onPress, disabled}: TextButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{alignItems:"center", justifyContent:"center", 
        backgroundColor: COLORS.primary, ...buttonContainerStyle}}
        disabled={disabled}
    >
      <Text style={{color:COLORS.white, fontSize:16, fontWeight:"500", ...labelStyle}}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({})