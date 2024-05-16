import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import AuthLayout from './AuthLayout'
import FormInput from '../../components/FormInput'
import { COLORS, icons, SIZES } from '../../constants'
import utils from '../../utils/Utils'
import CustomSwitch from '../../components/CustomSwitch'
import TextButton from '../../components/TextButton'
import TextSocialIconButton from '../../components/TextSocialIconButton'

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [saveMe, setSaveMe] = useState(false)

  function isEnabledSignIn (){
    return email != "" && password != "" && errorMsg == ""
  }

  return (
    <AuthLayout
     title='Lets Sign You In'
     subtitle='Welcome back you have been missed'
     titleContainerStyle={{}}
    >
      <View style={{flex:1, marginTop: SIZES.padding * 2}}>
        {/* form input */}
        <FormInput
          label='Email'
          keyboardType="email-address"
          autoComplete="email"
          onChange={(value) => {
            utils.validateEmail(value, setErrorMsg)
            setEmail(value)
          }}
          errorMsg={errorMsg}
          appendCompenent={
            <View style={{justifyContent:"center"}}>
              <Image 
                source={email=="" || (email != "" && errorMsg == "") ? icons.correct : icons.cross}
                style={{height:20, width:20, 
                  tintColor: email == "" ? COLORS.gray : (email != "" && errorMsg == "") ? COLORS.green : COLORS.red  }}
              />
            </View>
          }
        />
        
        <FormInput
          label='Password'
          secureTextEntry={!showPassword}
          autoComplete="password"
          onChange={(value) => {
            setPassword(value)
          }}
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

        {/* save me & forgot password */}
        <View style={{flexDirection:'row', justifyContent:"space-between", 
          marginTop:SIZES.radius}}
        >
          <CustomSwitch
            value={saveMe}
            onChange={(value)=> setSaveMe(value)}
          />

          <TextButton
            label="Forgot Password"
            buttonContainerStyle={{backgroundColor:null}}
            labelStyle={{color: COLORS.gray, fontSize:15}}
            onPress={()=> navigation.navigate("ForgotPassword")}
          />
        </View>

        {/* sign in */}
        <TextButton
          label="Sign In"
          disabled={isEnabledSignIn() ? false : true}
          buttonContainerStyle={{
            height:55, alignItems:"center", marginTop: SIZES.padding, 
            borderRadius: SIZES.radius, 
            backgroundColor: isEnabledSignIn() ? COLORS.primary : COLORS.transparentPrimray
          }}
          onPress={()=> navigation.navigate("Otp")}
        />

        {/* sign up */}
        <View style={{flexDirection:"row", justifyContent:"center", 
          marginTop:SIZES.radius}}
        >
          <Text style={{color:COLORS.darkGray, fontSize:17}}>
            Don't have and account?
          </Text>

          <TextButton
            label="Sign Up"
            buttonContainerStyle={{backgroundColor: null, marginLeft:5}}
            onPress={()=> navigation.navigate("SignUp")}
            labelStyle={{
              color: COLORS.primary, fontSize:18, fontWeight:"500"
            }}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={{ gap:5}}>
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
          labelStyle={{marginLeft: SIZES.radius, color: COLORS.white}}
          onPress={()=>{}}
        />
        {/* google btn */}
        <TextSocialIconButton
          containerStyle={{
            height: 50, alignItems:"center", borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{tintColor: null}}
          label='Continue With Google'
          labelStyle={{marginLeft: SIZES.radius}}
          onPress={()=>{}}
        />
      
      </View>
    </AuthLayout>
  )
}

export default SignIn

const styles = StyleSheet.create({})