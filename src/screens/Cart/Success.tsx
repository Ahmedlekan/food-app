import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../constants'
import TextButton from '../../components/TextButton'

const Success = ({navigation}) => {
  return (
    <View style={{flex:1, paddingHorizontal:SIZES.padding, justifyContent:"center"}}>
      
      <View style={{ alignItems:"center"}}>
        <Image
          source={images.success}
          style={{width:150, height:150}}
        />

        <Text style={{marginTop:SIZES.padding, fontSize:22, fontWeight:"600"}}>
          Congratulations
        </Text>
        <Text style={{
           marginTop:SIZES.base,color: COLORS.darkGray
        }}>
          Payment was successfully made!
        </Text>
      </View>

        {/* footer */}
        <TextButton
          buttonContainerStyle={{
            height:55, marginBottom:SIZES.padding, borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary, marginTop:SIZES.padding
          }}
          label='Done'
          onPress={()=> navigation.navigate("DeliveryStatus")}
        />

    </View>
  )
}

export default Success

const styles = StyleSheet.create({})