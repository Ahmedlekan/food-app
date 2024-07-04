import { StyleSheet, Text, View, ScrollView, StatusBar, 
  TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import { COLORS, icons, SIZES } from '../../constants'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import { RenderDetails, RenderRestaurants, RenderFooter } from '../../components/FoodDetails'
import LineDivider from '../../components/LineDivider'
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type'
import { useProductStore } from '../../store/useStore'
import { FoodItem } from '../../type'
import {dummyData} from '../../constants'

// type FoodDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'FoodDetails'>;
// type FoodDetailsRouteProp = RouteProp<RootStackParamList, 'FoodDetails'>;

// type Props = {
//   navigation: FoodDetailsNavigationProp;
//   route: FoodDetailsRouteProp;
// };

const FoodDetails = ({navigation, route}) => {
  const { item:product} = route.params;
  const {addToCart, addToFavoriteList, calculateCartPrice, deleteFromFavoriteList} = useProductStore()

  const initialPrice = product?.prices?.[0];
  const [price, setPrice] = useState(initialPrice);


  const addToCarthandler = (product) => {
    addToCart(product);
    calculateCartPrice();
    navigation.navigate("CartTab");
  };


  if(!product?.name){
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Text>Product not found</Text>
      </View>
    )
  }

  const toggleFavorite = ()=>{

  }

  return (
    <View style={{flex:1, backgroundColor: COLORS.white}}>    
      {/* Header */}
      <Header 
        title="DETAILS PAGE" 
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
      />
      
      {/* Body */}
      <ScrollView>
        {/* Food Detail */}
        <RenderDetails
          foodItem={product}
          price={price}
          setPrice={setPrice}
        />
        <LineDivider/>
        {/* Restaurant */}
        <RenderRestaurants />
      </ScrollView>

      {/* Footer */}
      <LineDivider />
      <RenderFooter 
        footerItem={product}
        price={price}
        setPrice={setPrice}
        onPress={()=> addToCarthandler(product)}
      />
      
    </View>

  )
}

export default FoodDetails

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  FooterInfoArea: {
    padding: SIZES.padding,
  },
 

})