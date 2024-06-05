import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const LineDivider = () => {
  return (
    <View
        style={{
            height:2, width:"100%", 
            backgroundColor:COLORS.lightGray2
        }}
    />
  )
}

export default LineDivider

const styles = StyleSheet.create({})