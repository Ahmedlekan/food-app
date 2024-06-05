import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

type TextButtonProps = {
    label?: string
    labelStyle?: {}
    buttonContainerStyle: {}
    onPress?:()=> void
    disabled?: any
    label2?: string,
    label2Style?: {}
}

const TextButton = ({label, label2="", label2Style, labelStyle, buttonContainerStyle, 
  onPress, disabled}: TextButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{alignItems:"center", justifyContent:"center", 
        backgroundColor: COLORS.primary, ...buttonContainerStyle}}
        disabled={disabled}
    >
      <Text style={{color:COLORS.white, fontSize:16, fontWeight:"500", ...labelStyle}}>
        {label}
      </Text>

      {label2 !=="" && (
        <Text style={{flex:1, textAlign:"right", color:COLORS.white,
          ...label2Style, fontSize:20, fontWeight:"500"}}
        >
          {label2}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({})