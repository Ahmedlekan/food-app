import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

type TextButtonProps = {
    key?:any
    label:any
    labelStyle?:any
    buttonContainerStyle:any
    onPress:()=> void
}

const TextButton = ({key, label, labelStyle, buttonContainerStyle, onPress}: TextButtonProps) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{alignItems:"center", justifyContent:"center", 
        backgroundColor:COLORS.primary, ...buttonContainerStyle}}
    >
      <Text style={{color:COLORS.white, fontSize:16, fontWeight:"500", ...labelStyle}}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({})