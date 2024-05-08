import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={styles.notContainer}>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  notContainer:{
    flex: 1, 
    justifyContent:"center", 
    alignItems:"center"
  }
})