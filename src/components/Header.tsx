import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type HeaderProps = {
    containerStyle: any
    title: string
    leftComponent:any
    rightComponent: any
}

const Header = ({containerStyle, title, leftComponent, rightComponent}: HeaderProps) => {

  return (
    <View style={{flexDirection:"row", ...containerStyle}}>
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