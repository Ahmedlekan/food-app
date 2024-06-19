import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type HeaderProps = {
    containerStyle: {}
    title: string
    leftComponent?:any
    rightComponent?: any
    titleStyle?:{}
}

const Header = ({containerStyle, titleStyle, title, leftComponent, rightComponent}: HeaderProps) => {

  return (
    <View style={{height:60, flexDirection:"row", ...containerStyle}}>
      {leftComponent}
      <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
        <Text style={{fontWeight: 'bold', ...titleStyle}}>{title}</Text>
      </View>
      {rightComponent}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})