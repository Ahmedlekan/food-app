import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import IconLabel from './IconLabel'
import TextButton from '../TextButton'
import { FoodItem } from '../../type'

type RenderDetailsProps = {
    foodItem:FoodItem
}

const RenderDetails = ({foodItem}: RenderDetailsProps) => {
    const [selectedSize, setselectedSize] = useState<number>()
    const [fullDesc, setFullDesc] = useState<boolean>(false);

  return (
    <View style={{marginTop: SIZES.radius,marginBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding}}
    >
      {/* food card */}
      <View style={{height:190, borderRadius:15, 
        backgroundColor: COLORS.lightGray2}}
      >
        {/* calories & favorites */}
        <View style={{flexDirection:"row", justifyContent:"space-between",
            marginTop: SIZES.base, paddingHorizontal: SIZES.radius}}
        >
            <View style={{flexDirection:'row'}}>
                <Image source={ icons.calories}
                    style={{width:30, height:30}}
                />
                <Text style={{color:COLORS.darkGray2}}>
                    {foodItem?.calories} calories
                </Text>
            </View>

            <Image source={icons.love}
                style={{width:20, height:20,
                    tintColor: foodItem.isFavourite ? COLORS.primary : COLORS.gray
                }}
            />
        </View>

        {/* food image */}
        <Image source={foodItem?.image} resizeMode='contain'
            style={{height:170, width:"100%"}}
        />
      </View>

      {/* food info */}
      <View style={{marginTop: SIZES.padding}}>
        
        <Text style={{fontSize:25, fontWeight:"600"}}>
            {foodItem?.name}
        </Text>

        {fullDesc ? (
            <TouchableWithoutFeedback
                onPress={()=> setFullDesc(prev => !prev)}
            >
                <Text style={{marginTop:SIZES.base, color: COLORS.darkBlue,
                    textAlign:"justify", fontSize:17}}
                >
                {foodItem?.description}
                </Text>
            </TouchableWithoutFeedback>
        ):(
            <TouchableWithoutFeedback
                onPress={()=> setFullDesc(prev => !prev)}
            >
                <Text style={{marginTop:SIZES.base, color: COLORS.darkBlue,
                    textAlign:"justify", fontSize:17}}
                    numberOfLines={3}
                >
                {foodItem?.description}
                </Text>
            </TouchableWithoutFeedback>
        )}

        {/* ratings, duration $ shipping */}
        <View style={{flexDirection:"row", marginTop: SIZES.padding}}>
            <IconLabel
                containerStyle={{backgroundColor: COLORS.primary}}
                icon={icons.star}
                label='4.5'
                labelStyle={{color: COLORS.white}}
            />
            <IconLabel
                containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
                icon={icons.clock}
                iconStyle={{tintColor: COLORS.black}}
                label='30 Mins'
            />
            <IconLabel
                containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
                icon={icons.dollar}
                iconStyle={{tintColor: COLORS.black}}
                label='Free shipping'
            />

        </View>

        {/* sizes section */}
        <View style={{
            flexDirection:"row", alignItems:"center", 
            marginTop: SIZES.padding}}
        >
            <Text style={{fontSize:18, fontWeight:"500"}}>Sizes:</Text>

            <View style={{
                flexDirection:"row", flexWrap:"wrap", marginLeft:SIZES.padding}}
            >
                {dummyData.sizes.map((item, index) =>(
                    <TextButton
                        key={`Sizes-${index}`}
                        buttonContainerStyle={{
                            width: 55, height:55, margin:SIZES.base, borderWidth:1,
                            borderRadius:SIZES.radius, 
                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                        }}
                        label={item.label}
                        labelStyle={{color: selectedSize == item.id ? COLORS.white : COLORS.gray2, 
                            fontSize:20, fontWeight:"500"}}
                        onPress={()=> setselectedSize(item.id)}
                    />
                ))}
            </View>
        </View>
        
      </View>

    </View>
  )
}

export default RenderDetails

const styles = StyleSheet.create({})