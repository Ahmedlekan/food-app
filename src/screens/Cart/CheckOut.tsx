import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import IconButton from '../../components/IconButton'
import Header from '../../components/Header'
import CardItem from '../../components/CardComponents/CardItem'
import FormInput from '../../components/FormInput'
import FooterTotal from '../../components/FooterTotal'


const CheckOut = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(()=>{
    let {selectedCard} = route.params
    setSelectedCard(selectedCard)
  },[])

  const renderMyCards = () => {
    return (
      <View>
        {dummyData.myCards.map((item, index)=>(
          <CardItem
            key={`MyCard-${item.id}`}
            item={item}
            isSelectetd={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
            onPress={()=> setSelectedCard({...item, key:"MyCard"}) }
          />
        ))}
      </View>
    )
  }

  const renderDeliverAddress = ()=>{
    return(
      <View style={{marginTop:SIZES.padding}}>
        
        <Text style={{fontSize:18, fontWeight:"500"}}>
          Delivery Address
        </Text>

        <View style={{
          flexDirection:"row", alignItems:"center", marginTop:SIZES.radius,
          paddingVertical:SIZES.radius, paddingHorizontal:SIZES.padding,
          borderWidth:2, borderRadius:SIZES.radius, borderColor:COLORS.lightGray2
        }}>
          <Image source={icons.location}
            style={{width:40, height:40, tintColor:COLORS.black}}
          />
          <Text style={{ marginLeft:SIZES.radius, width:"85%", 
            fontWeight:"400", fontSize:16}}>
            300 Post Street San Francisco
          </Text>
        </View>

      </View>
    )
  }

  const renderCoupon = () =>(
    <View style={{marginVertical:SIZES.padding}}>
      
      <Text style={{fontSize:18, fontWeight:"500"}}>
        Add Coupon
      </Text>

      <FormInput
        inputContainerStyle={{
          margintTop:0, paddingLeft:SIZES.padding, paddingRight:0,
          borderWidth:2, borderColor:COLORS.lightGray2,
          backgroundColor: COLORS.white, overflow:"hidden"
        }}
        placeHolder='Coupon Code'
        appendCompenent={
          <View style={{
            width:60, alignItems:"center", justifyContent:"center",
            backgroundColor:COLORS.primary
          }}>
            <Image source={icons.discount}
              style={{height:40, width:40}}
            />
          </View>
        }
      />
    </View>
  )
  
  return (
    <View style={{flex: 1, backgroundColor:COLORS.white}}>
      {/* header */}
      <Header
        title='CHECKOUT'
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

      {/* body */}
      <KeyboardAwareScrollView
        extraScrollHeight={-200}
        keyboardDismissMode='on-drag'
        contentContainerStyle={{flexGrow:1, paddingHorizontal:SIZES.padding,
          paddingBottom:20
        }}
      >
        {/* mt cards */}
        {renderMyCards()}

        {/* delivery address */}
        {renderDeliverAddress()}

        {/* coupon */}
        {renderCoupon()}

        {/* footer */}
        <FooterTotal
          subTotal={37.97}
          shippingFee={0.00}
          total={37.97}
          onPress={()=> navigation.replace("Success")}
        />
      </KeyboardAwareScrollView>

    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({})