import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'

type RadioButtonProps = {
    onPress:()=> void
    isSelected: boolean
    label:string
}

const RadioButton = ({onPress, isSelected, 
    label,}:RadioButtonProps) => {

  return (
    <View style={{
        flexDirection:"row", alignItems:"center", justifyContent:"center"
        }}
    >
        <TouchableOpacity onPress={onPress}>
            <Image
                source={isSelected ? icons.check_on : icons.check_off}
                style={{marginLeft:5, width:20, height:20}}
            />
        </TouchableOpacity>

      <Text style={{marginLeft:SIZES.radius, color:COLORS.gray, 
        fontSize:18, fontWeight:"500"}}
      >
        {label}
      </Text>
    </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({})