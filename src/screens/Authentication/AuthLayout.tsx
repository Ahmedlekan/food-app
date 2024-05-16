import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, images, SIZES } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type AuthLayoutProps = {
    children: React.ReactNode 
    title: string 
    subtitle:string 
    titleContainerStyle:{}
}

const AuthLayout = ({children, title, subtitle, titleContainerStyle}:AuthLayoutProps) => {

  return (
    <View style={{flex:1, paddingVertical: SIZES.padding, backgroundColor: COLORS.white}}>
        <KeyboardAwareScrollView
            keyboardDismissMode='on-drag'
            contentContainerStyle={{flex:1, paddingHorizontal: SIZES.padding}}
        >
            {/* icon */}
            <View style={{alignItems:"center"}}>
                <Image 
                    source={images.logo_02} 
                    resizeMode='contain'
                    style={{height:100, width:200}}
                />
            </View>
            {/* title */}
            <View style={{marginTop:SIZES.padding, ...titleContainerStyle}}>
                <Text style={{textAlign:"center", fontWeight:"600", fontSize:22}}>
                    {title}
                </Text>
                <Text style={{textAlign:"center", color:COLORS.darkGray, 
                    marginTop:SIZES.base, fontWeight:"400", fontSize:16}}>
                    {subtitle}
                </Text>
            </View>
            {/* children */}
            {children}
        </KeyboardAwareScrollView>
    </View>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})