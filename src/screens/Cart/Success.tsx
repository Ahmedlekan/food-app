import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../constants'
import TextButton from '../../components/TextButton'

const Success = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Image
        source={images.success}
        style={{width:150, height:150}}
      />

      <Text style={{marginTop:SIZES.padding, fontSize:22, fontWeight:"600"}}>
        Congratulations
      </Text>
      <Text style={{
        textAlign:"center", marginTop:SIZES.base,color: COLORS.darkGray
      }}>
        Payment was successfully made!</Text>

        {/* footer */}
        <TextButton
          buttonContainerStyle={{
            height:55, marginBottom:SIZES.padding, borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary
          }}
          label='Done'
          onPress={()=> navigation.navigate("DeliveryStatus")}
        />

    </View>
  )
}

export default Success

const styles = StyleSheet.create({})