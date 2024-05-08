import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartTab = () => {
  return (
    <View style={styles.cartContainer}>
      <Text>Cart</Text>
    </View>
  )
}

export default CartTab

const styles = StyleSheet.create({
  cartContainer:{
    flex: 1, 
    justifyContent:"center", 
    alignItems:"center"
  }
})