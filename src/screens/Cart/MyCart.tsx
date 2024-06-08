import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../../constants'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import CartQuantity from '../../components/CartQuantity'
import { RenderCartList } from '../../components/CartComponents'
import FooterTotal from '../../components/FooterTotal'

const MyCart = ({navigation}) => {

  return (
    <View style={{flex:1, backgroundColor: COLORS.white}}>
      {/* Header */}
      <Header
        title='MY CART'
        containerStyle={{height:50, marginHorizontal:SIZES.padding, marginTop:40}}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width:40, height:40, justifyContent:"center", alignItems:"center",
              borderWidth:1, borderRadius: SIZES.radius, borderColor: COLORS.gray2
            }}
            iconsStyle={{
              width:20, height:20, tintColor: COLORS.gray2
            }}
            onPress={()=> navigation.goBack()}
          />
        }
        
        rightComponent={
          <CartQuantity 
            quantity={3}
            onPress={()=>{}}
          />
        }
      />

      {/* Cart List */}
      <RenderCartList />

      {/* Footer */}
      <FooterTotal
        subTotal={37.77}
        total={37.77}
        onPress={()=> navigation.navigate("MyCard")}
        shippingFee={0}
      />
    </View>
  )
}

export default MyCart

const styles = StyleSheet.create({})