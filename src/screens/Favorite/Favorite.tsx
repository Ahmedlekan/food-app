import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorite = () => {
  return (
    <View style={styles.favContainer}>
      <Text>Favorite</Text>
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
  favContainer:{
    flex: 1, 
    justifyContent:"center", 
    alignItems:"center"
  }
})