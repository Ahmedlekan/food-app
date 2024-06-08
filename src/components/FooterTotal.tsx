import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES } from '../constants'
import LineDivider from './LineDivider'
import TextButton from './TextButton'

type FooterTotalProps = {
    subTotal: number
    shippingFee: number
    total:number
    onPress: ()=> void
}

const FooterTotal = ({subTotal, shippingFee, total, onPress}:FooterTotalProps) => {

  return (
    <View>
      <LinearGradient
        start={{x:0, y:0}}
        end={{x:0, y:1}}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{position:"absolute", left:0, right:0, top:-15,
            height: Platform.OS === "ios" ? 200 : 50,
            borderTopLeftRadius:15, borderTopRightRadius:15
        }}
      />

      <View style={{padding:SIZES.padding,borderTopLeftRadius:20, 
        borderTopRightRadius:20, backgroundColor:COLORS.white }}
      >
        <View style={{flexDirection:"row"}}>
            <Text style={{flex:1}}>Subtotal</Text>
            <Text style={{fontSize:18, fontWeight:"500"}}>
                ${subTotal.toFixed(2)}
            </Text>
        </View>

        <View style={{flexDirection:"row", marginBottom:SIZES.padding,
            marginTop:SIZES.base}}
        >
            <Text style={{flex:1}}>Shipping Fee</Text>
            <Text style={{fontSize:18, fontWeight:"500"}}>
                ${shippingFee.toFixed(2)}
            </Text>
        </View>

        <LineDivider />

        <View style={{flexDirection:"row",marginTop:SIZES.padding}}>
            <Text style={{flex:1, fontSize:22, fontWeight:"600"}}>
                Total:
            </Text>
            <Text style={{fontSize:22, fontWeight:"600"}}>
                {total.toFixed(2)}
            </Text>
        </View>

        <TextButton
            buttonContainerStyle={{
                height:60, marginTop:SIZES.padding, borderRadius:SIZES.radius,
                backgroundColor:COLORS.primary
            }}
            label='Place your Order'
            onPress={onPress}
        />

      </View>

    </View>
  )
}

export default FooterTotal

const styles = StyleSheet.create({})