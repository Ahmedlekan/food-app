import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import AuthLayout from './AuthLayout'
import { SIZES, COLORS, icons } from '../../constants'
import FormInput from '../../components/FormInput'
import utils from '../../utils/Utils'
import TextButton from '../../components/TextButton'

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  function isEnabledSignIn (){
    return email != "" && emailError == ""
  }

  return (
    <AuthLayout
      title='Password Recovery'
      subtitle='Please enter your email address to recover your password'
      titleContainerStyle={{marginTop: SIZES.padding * 2}}
    >
      <View style={{flex:1, marginTop:SIZES.padding * 2}}>
        <FormInput
          label='Email'
          keyboardType="email-address"
          autoComplete="email"
          onChange={(value) => {
            utils.validateEmail(value, setEmailError)
            setEmail(value)
          }}
          errorMsg={emailError}
          appendCompenent={
            <View style={{justifyContent:"center"}}>
              <Image 
                source={email=="" || (email != "" && emailError == "") ? icons.correct : icons.cross}
                style={{height:20, width:20, 
                  tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red  }}
              />
            </View>
          }
        />
      </View>

      {/* Button */}
      <TextButton
        label='Send Email'
        disabled={isEnabledSignIn() ? false : true}
        buttonContainerStyle={{height:55, alignItems:"center", 
        marginTop:SIZES.padding, borderRadius: SIZES.radius, 
        backgroundColor: isEnabledSignIn() ? COLORS.primary : COLORS.transparentPrimray}}
        onPress={()=> navigation.goBack()}
      />
    </AuthLayout>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})