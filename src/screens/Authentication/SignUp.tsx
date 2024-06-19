import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import AuthLayout from './AuthLayout'
import { SIZES, COLORS } from '../../constants'
import FormInput from '../../components/FormInput'
import utils from '../../utils/Utils'
import {icons} from '../../constants'
import TextButton from '../../components/TextButton'
import TextSocialIconButton from '../../components/TextSocialIconButton'

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [userNameError, setUserNameError] = useState("")

  function isEnabledSignIn (){
    return email != "" && userName !="" && password != "" && 
    emailError == "" && passwordError == "" && userNameError == ""
  }
  
  return (
    <AuthLayout
      title='Getting Started'
      subtitle='Create an account to continue'
      titleContainerStyle={{marginTop: SIZES.radius}}
    >
      
      {/* form input and sign up */}
      <View style={{flex:1, marginTop:SIZES.padding}}>
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
  
        <FormInput
            label='Username'
            onChange={(value) => {
              setUserName(value)
            }}
            containerStyle={{marginTop: SIZES.radius}}
            errorMsg={userNameError}
            appendCompenent={
              <View style={{justifyContent:"center"}}>
                <Image 
                  source={userName=="" || (userName != "" && userNameError == "") ? icons.correct : icons.cross}
                  style={{height:20, width:20, 
                    tintColor: userName == "" ? COLORS.gray : (userName != "" && userNameError == "") ? COLORS.green : COLORS.red  }}
                />
              </View>
            }
        />

        <FormInput
          label='Password'
          secureTextEntry={!showPassword}
          autoComplete="password"
          onChange={(value) => {
            utils.validatePassword(value, setPasswordError)
            setPassword(value)
          }}
          errorMsg={passwordError}
          containerStyle={{marginTop: SIZES.radius}}
          appendCompenent={
            <TouchableOpacity
              onPress={()=> setShowPassword(!showPassword)}
              style={{width:40, alignItems:"flex-end", justifyContent:"center"}}
            >
              <Image 
                source={showPassword ? icons.eye_close : icons.eye}
                style={{height:20, width:20, tintColor:COLORS.gray}}
                />
            </TouchableOpacity>
          }
        />

        {/* Sign up & Sign in */}
        <TextButton
          label="Sign Up"
          disabled={isEnabledSignIn() ? false : true}
          buttonContainerStyle={{
            height:55, alignItems:"center", marginTop: SIZES.padding, 
            borderRadius: SIZES.radius, 
            backgroundColor: isEnabledSignIn() ? COLORS.primary : COLORS.transparentPrimray
          }}
          onPress={()=> navigation.navigate("SignIn")}
        />

        <View style={{flexDirection:"row", justifyContent:"center", 
          marginTop:SIZES.radius}}
        >
          <Text style={{color:COLORS.darkGray, fontSize:17}}>
            Already have an account?
          </Text>

          <TextButton
            label="Sign In"
            buttonContainerStyle={{backgroundColor: null, marginLeft:5}}
            onPress={()=> navigation.navigate("SignIn")}
            labelStyle={{
              color: COLORS.primary, fontSize:18, fontWeight:"500"
            }}
          />
        </View>


        {/* Footer */}
        <View style={{ gap:10, marginTop:SIZES.padding * 2}}>
          {/* facebook btn */}
          <TextSocialIconButton
            containerStyle={{
              height: 50, alignItems:"center", borderRadius: SIZES.radius,
              backgroundColor: COLORS.blue
            }}
            icon={icons.fb}
            iconPosition="LEFT"
            iconStyle={{tintColor: COLORS.white}}
            label='Continue With Facebook'
            onPress={()=>{}}
          />
          {/* google btn */}
          <TextSocialIconButton
            containerStyle={{
              height: 50, alignItems:"center", borderRadius: SIZES.radius,
              backgroundColor: COLORS.gray2
            }}
            icon={icons.google}
            iconPosition="LEFT"
            iconStyle={{tintColor: null}}
            label='Continue With Google'
            onPress={()=>{}}
          />
        
        </View>

      </View>

    </AuthLayout>
  )
}

export default SignUp

const styles = StyleSheet.create({})