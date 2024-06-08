import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../constants'
import IconButton from '../IconButton'

type SteperInputProps = {
    value: number
    onAdd: ()=> void
    onMinus: ()=> void
    containerStyle?: {}
}

const SteperInput = ({value=1, onAdd, onMinus, containerStyle}: SteperInputProps) => {

  return (
    <View style={{ flexDirection:'row', width:130, 
      height:60,backgroundColor:COLORS.lightGray2, ...containerStyle}}
    >
      <IconButton
        containerStyle={{
          width:50,
          alignItems:"center",
          justifyContent:"center"
        }}
        icon={icons.minus}
        iconsStyle={{
          width:25, height:25,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray
        }}
        onPress={onMinus}
      />
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:20, fontWeight:"500"}}>{value}</Text>
      </View>

      <IconButton
          containerStyle={{
          width:50,
          alignItems:"center",
          justifyContent:"center"
        }}
        icon={icons.plus}
        iconsStyle={{
          width:25, height:25,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray
        }}
        onPress={onAdd}
      />

    </View>
  )
}

export default SteperInput

const styles = StyleSheet.create({})