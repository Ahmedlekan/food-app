import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { COLORS, constant, icons, SIZES } from '../../constants'
import Header from '../../components/Header'
import LineDivider from '../../components/LineDivider'
import TextButton from '../../components/TextButton'
import TextSocialIconButton from '../../components/TextSocialIconButton'

const DeliveryStatus = ({navigation}) => {

  const [currentStep, setCurrentStep] = useState<number>(3)

  const renderInfo = ()=>{
    return(
      <View style={{
        marginTop:SIZES.radius, paddingHorizontal:SIZES.padding
      }}>
        <Text style={{textAlign:"center", color:COLORS.gray}}></Text>
        <Text style={{textAlign:"center", fontSize:16, fontWeight:"600"}}>6/17/2024</Text>
      </View>
    )
  }

  const renderTrackOrder = ()=>(
    <View style={{
      marginTop:SIZES.padding, paddingVertical:SIZES.padding,
      borderRadius:SIZES.radius, borderWidth:2, borderColor:COLORS.lightGray2,
      backgroundColor:COLORS.white
    }}>

      <View style={{flexDirection:"row", alignItems:"center",
        justifyContent:"space-between",marginBottom:20, 
        paddingHorizontal:SIZES.padding
      }}>
        <Text style={{fontSize:15, fontWeight:"500"}}>Track Order</Text>
        <Text style={{color:COLORS.gray}}>NY012345</Text>
      </View>

      <LineDivider/>

      {/* status */}
      <View style={{marginTop:SIZES.padding, paddingHorizontal:SIZES.padding}}>
        
        {constant.track_order_status.map((item, index)=>(
          <View key={item.id}>
            
            <View style={{flexDirection:"row", alignItems:"center",
              marginVertical:-5
            }}>
              <Image
                source={icons.check_circle}
                style={{width:40, height:40,
                  tintColor:index <= currentStep ? COLORS.primary : COLORS.lightGray1
                }}
              />

              <View style={{marginLeft:SIZES.radius}}>
                <Text style={{fontSize:15, fontWeight:"500"}}>{item.title}</Text>
                <Text style={{color:COLORS.gray}}> {item.sub_title} </Text>
              </View>
            </View>

            {index < constant.track_order_status.length -1 && (
              <View>
                {index < currentStep &&(
                  <View
                  style={{width:3, height:50, marginLeft:18,
                    backgroundColor:COLORS.primary, zIndex:-1
                  }}
                  />
                )}

                {index >= currentStep && (
                  <Image
                    source={icons.dotted_line}
                    style={{width:4, height:50, marginLeft:17}}
                    resizeMode='cover'
                  />
                )}
              </View>
            )}

          </View>
        ))}
      
      </View>

    </View>
  )

  const renderFooter = ()=>(
    <View style={{marginBottom:SIZES.padding}}>
      {currentStep < constant.track_order_status.length -1 && (
        <View style={{flexDirection:"row", height:55}}>
          {/* cancel */}
          <TextButton
            buttonContainerStyle={{
              width:"40%", borderRadius:SIZES.base,
              backgroundColor: COLORS.lightGray2
            }}
            label='Cancel'
            labelStyle={{color: COLORS.primary}}
            onPress={()=> navigation.navigate("FoodDetails")}
          />

          {/* mapView */}
          <TextSocialIconButton
            containerStyle={{
              flex:1, marginLeft: SIZES.radius, borderRadius: SIZES.base,
              backgroundColor: COLORS.primary
            }}
            label='Map View'
            icon={icons.apple}
            iconStyle={{width:25, height:25, marginRight: SIZES.base,
              tintColor:COLORS.white
            }}
            onPress={()=> navigation.navigate("Map")}
          />

        </View>
      )}

      {currentStep === constant.track_order_status.length -1 &&(
        <TextButton
          buttonContainerStyle={{
            height:55, borderRadius: SIZES.base
          }}
          label='Done'
          onPress={()=> navigation.navigate("FoodDetails")}
        />
      )}
    </View>
  )

  return (
    <View style={{
      flex:1, backgroundColor:COLORS.white, paddingHorizontal:SIZES.padding
    }}>
      {/* header */}
      <View style={{flex:1}}>
        <Header
          title='DELIVERY STATUS'
          containerStyle={{height:50, marginHorizontal:SIZES.padding, marginTop:40}}
        />

        {/* info */}
        {renderInfo()}

        {/* track order */}
        {renderTrackOrder()}

      </View>

      {/* footer */}
      {renderFooter()}
    </View>
  )
}

export default DeliveryStatus

const styles = StyleSheet.create({})