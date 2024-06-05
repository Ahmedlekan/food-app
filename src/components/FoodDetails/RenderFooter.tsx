import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { COLORS, SIZES } from '../../constants'
import SteperInput from './SteperInput'
import TextButton from '../TextButton'

const RenderFooter = ({navigation}) => {
  const [qty, setQty] = useState<number>(1)
  return (
    <View style={{
        flexDirection:"row", alignItems:"center", height:120, 
        paddingHorizontal:SIZES.padding, paddingBottom:SIZES.radius
    }}>
      <SteperInput
        value={qty}
        onAdd={()=> setQty(prev => prev + 1)}
        onMinus={()=> {
          if(qty > 1){
            setQty(prev => prev - 1)
          }
        }}
      />
      
      <TextButton
        buttonContainerStyle={{
          flex:1, flexDirection:"row", height:60, marginLeft:SIZES.radius,
          paddingHorizontal: SIZES.radius, borderRadius:SIZES.radius,
        }}
        label='Buy Now'
        label2='$15.99'
        onPress={()=> navigation.navigate("MyCart")}
      />
    </View>
  )
}

export default RenderFooter

const styles = StyleSheet.create({})