import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

type CustomDrawerItemProps = {
    label: any
    icon: any
}

const CustomDrawerItem = ({label, icon}: CustomDrawerItemProps) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={icon} style={styles.img} />

      <Text style={styles.txt}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomDrawerItem

const styles = StyleSheet.create({
    btn:{
        flexDirection:'row',
        height:40,
        marginBottom: SIZES.base,
        alignItems:'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base
    },
    img:{
        width:20,
        height:20,
        tintColor: COLORS.white
    },
    txt:{
        marginLeft: 15,
        color: COLORS.white,
        ...FONTS.h3
    }
})