import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import { COLORS, icons, SIZES } from '../../constants'
import RenderMyCards from '../../components/CardComponents/RenderMyCards'
import AddNewCards from '../../components/CardComponents/AddNewCards'

const MyCard = ({navigation}) => {
  return (
    <View>
      {/* header */}
      <Header
        title='MY CARDS'
        containerStyle={{height:50, marginHorizontal:SIZES.padding, marginTop:40}}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width:40, height:40, justifyContent:"center", alignItems:"center",
              borderWidth:1, borderRadius: SIZES.radius, borderColor: COLORS.gray2
            }}
            iconsStyle={{
              width:20, height:20, tintColor: COLORS.gray2
            }}
            onPress={()=> navigation.goBack()}
          />
        }
        
        rightComponent={
          <View style={{ width:40}} />
        }
      />

      {/* cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow:1, marginTop:SIZES.radius,paddingHorizontal:SIZES.padding,
          paddingBottom:SIZES.radius
        }}
      >
        {/* cards */}
        <RenderMyCards />
        {/* add new cards */}
        <AddNewCards />
      </ScrollView>

      {/* footer */}
    </View>
  )
}

export default MyCard

const styles = StyleSheet.create({})