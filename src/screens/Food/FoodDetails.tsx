import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import CartQuantity from '../../components/CartQuantity'
import { RenderDetails, RenderRestaurants, RenderFooter } from '../../components/FoodDetails'
import LineDivider from '../../components/LineDivider'
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type'

type FoodDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'FoodDetails'>;
type FoodDetailsRouteProp = RouteProp<RootStackParamList, 'FoodDetails'>;

type Props = {
  navigation: FoodDetailsNavigationProp;
  route: FoodDetailsRouteProp;
};

const FoodDetails:React.FC<Props> = ({navigation, route}) => {

  const { item:foodItem } = route.params;

  if(!foodItem?.name){
    return <Text style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        Product not found
      </Text>
  }

  return (
    <View style={{flex:1, backgroundColor: COLORS.white}}>    
      {/* Header */}
      <Header 
        title={foodItem.name.toUpperCase()} 
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
            onPress={()=> navigation.goBack()}
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