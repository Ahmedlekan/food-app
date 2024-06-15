import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

type FormInputProps = {
    containerStyle?:{}
    inputContainerStyle?:{}
    label?:string
    placeHolder?:string
    inputStyle?:{}
    prependCompenent?:any
    appendCompenent?:any
    onChange?:(a)=> void
    secureTextEntry?:any
    keyboardType?: string | any
    autoComplete?: string | any
    autoCapitalize?:any
    errorMsg?:string
    value?: string,
    maxLength?: number
}

const FormInput = ({containerStyle, label, placeHolder, inputStyle, 
    prependCompenent, appendCompenent, onChange, secureTextEntry, keyboardType="default", 
    autoComplete="off", autoCapitalize="none", errorMsg="", value, maxLength,
    inputContainerStyle}: FormInputProps) => {
  return (
    <View style={{...containerStyle}}>
      {/* label & error msg */}
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{color:COLORS.gray, fontWeight:"400", fontSize:16}}>
            {label}
        </Text>
        <Text style={{color: COLORS.red, fontWeight:"400", fontSize:15}}>
            {errorMsg}
        </Text>
      </View>

      {/* Text Input */}
      <View style={{flexDirection:"row", height:55, paddingHorizontal: SIZES.padding, 
        marginTop: SIZES.base, borderRadius: SIZES.radius, 
        backgroundColor: COLORS.lightGray1, ...inputContainerStyle}}
      >
        {prependCompenent}
        <TextInput
            style={{flex:1, ...inputStyle}}
            placeholder={placeHolder}
            placeholderTextColor={COLORS.gray}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            onChangeText={(text) => onChange(text)}
            value={value}
            maxLength={maxLength}
        />
        {appendCompenent}

      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({})