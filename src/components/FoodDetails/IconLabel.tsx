import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

type IconLabelProps = {
    containerStyle?: {}
    icon:any
    iconStyle?:{}
    label:string
    labelStyle?:{}
}

const IconLabel = ({containerStyle, icon, iconStyle, label, labelStyle}: IconLabelProps) => {
  return (
    <View style={{
        flexDirection:"row", paddingHorizontal: SIZES.radius, 
        paddingVertical: SIZES.base, borderRadius: SIZES.radius, ...containerStyle
    }}>
      
      <Image source={icon} 
        style={{ width:20, height:20, ...iconStyle}} 
        />

        <Text style={{marginLeft: SIZES.base, fontSize: 16, ...labelStyle}}>
            {label}
        </Text>

    </View>
  )
}

export default IconLabel

const styles = StyleSheet.create({})