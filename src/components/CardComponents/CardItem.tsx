import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../../constants'

type CardItemProps = {
    item:any
    isSelectetd: any
    onPress:()=> void
}

const CardItem = ({item, isSelectetd, onPress}: CardItemProps) => {

  return (
    <TouchableOpacity style={{
      flexDirection:"row", height:100, alignItems:"center",
      marginTop:SIZES.radius, paddingHorizontal:SIZES.padding,
      borderWidth:2, borderRadius:SIZES.radius, 
      borderColor: isSelectetd ? COLORS.primary : COLORS.lightGray1
      }}
      onPress={onPress}
    >
      <View style={{
        width:60, height:45, justifyContent:"center",alignItems:"center",
        borderWidth:2, borderRadius:SIZES.radius, borderColor:COLORS.lightGray1
      }}>
        <Image
          source={item.icon}
          resizeMode='center'
          style={{width:35, height:35}}
        />
      </View>
        <Text style={{flex:1, marginLeft:SIZES.radius, fontSize:17, fontWeight:"500"}}>
          {item.name}
        </Text>

        <Image
          source={isSelectetd ? icons.check_on : icons.check_off}
          style={{width:25, height:25}}
        />

    </TouchableOpacity>
  )
}

export default CardItem

const styles = StyleSheet.create({})