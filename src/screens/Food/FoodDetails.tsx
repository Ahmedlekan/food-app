import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import CartQuantity from '../../components/CartQuantity'
import { RenderDetails, RenderRestaurants, RenderFooter } from '../../components/FoodDetails'
import LineDivider from '../../components/LineDivider'

const FoodDetails = ({navigation}) => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani)

  return (
    <View style={{flex:1, backgroundColor: COLORS.white}}>    
      {/* Header */}
      <Header 
        title='DETAILS' 
        containerStyle={{height:50, marginTop:40, marginHorizontal: SIZES.padding}}
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
            onPress={()=>{}}
          />
        }
        rightComponent={
          <CartQuantity 
            quantity={3}
            onPress={()=>{}}
          />
        }
      />

      {/* Body */}
      <ScrollView>
        {/* Food Detail */}
        <RenderDetails
          foodItem={foodItem}
        />
        <LineDivider/>

        {/* Restaurant */}
        <RenderRestaurants />

      </ScrollView>

      {/* Footer */}
      <LineDivider />
      <RenderFooter navigation={navigation} />
      
    </View>
  )
}

export default FoodDetails

const styles = StyleSheet.create({})