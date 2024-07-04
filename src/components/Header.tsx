import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'

type HeaderProps = {
    title?: string
    leftComponent?:any
    rightComponent?: any
}

const Header = ({title, leftComponent, rightComponent}: HeaderProps) => {

  return (
    <View style={{height:60, flexDirection:"row",
      paddingHorizontal: SIZES.padding,marginTop: 40,alignItems:"center"}}
    >
      {leftComponent}
      <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
      </View>
      {rightComponent}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})