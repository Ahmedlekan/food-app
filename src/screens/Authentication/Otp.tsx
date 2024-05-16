import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import AuthLayout from './AuthLayout'
import { COLORS, SIZES } from '../../constants'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import TextButton from '../../components/TextButton'


const Otp = () => {
  const [timer, setTimer] = useState(60)
  

  return (
    <AuthLayout
      title='Otp Authentification'
      subtitle='An authentification code hasn been set to ahmedlekan011@gmail.com'
      titleContainerStyle={{marginTop: SIZES.padding * 2}}
    >
      <View style={{flex:1, marginTop: SIZES.padding * 2}}>
        <OTPInputView
          pinCount={4}
          style={{width:"100%", height:50}}
          codeInputFieldStyle={{width:65, height:65, backgroundColor: COLORS.lightGray2,
            borderRadius:SIZES.radius, color:COLORS.black, fontWeight:"500", fontSize:20
          }}
          onCodeFilled={(code)=>{}}
        />

        {/* Count down timer */}
        <View style={{flexDirection:"row", justifyContent:"center", 
          marginTop:SIZES.padding}}
        >
          <Text style={{color:COLORS.darkGray, fontSize:16}}>
            Didn't receive the code?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={ timer == 0 ? false : true }
            buttonContainerStyle={{backgroundColor:null, marginTop: SIZES.base}}
            labelStyle={{color: COLORS.primary, fontWeight:"500", fontSize:20}}
            onPress={()=> setTimer(60)}
          />
        </View>
      </View>
    </AuthLayout>
  )
}

export default Otp

const styles = StyleSheet.create({})