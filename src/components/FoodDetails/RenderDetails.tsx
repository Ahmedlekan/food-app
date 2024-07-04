import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, 
    TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import IconLabel from './IconLabel'
import TextButton from '../TextButton'
import { FoodItem } from '../../type'
import { PriceItem } from '../../type'

type RenderDetailsProps = {
    foodItem:FoodItem
    price: PriceItem
    setPrice: (item)=> void
}

const RenderDetails = ({foodItem, price, setPrice}: RenderDetailsProps) => {
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
                    {foodItem.calories} calories
                </Text>
            </View>

            <Image source={icons.love}
                style={{width:20, height:20,
                    tintColor: foodItem.isFavourite ? COLORS.primary : COLORS.gray
                }}
            />
        </View>

        {/* food image */}
        <Image source={foodItem.image} resizeMode='contain'
            style={{height:170, width:"100%"}}
        />
      </View>

      {/* food info */}
      <View style={{marginTop: SIZES.padding}}>
        
        <Text style={{fontSize:25, fontWeight:"600"}}>
            {foodItem.name}
        </Text>
        
        {/* Description */}
        {fullDesc ? (
            <TouchableWithoutFeedback
                onPress={()=> setFullDesc(prev => !prev)}
            >
                <Text style={{marginTop:SIZES.base, color: COLORS.darkBlue,
                    textAlign:"justify", fontSize:17}}
                >
                {foodItem.description}
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
                {foodItem.description}
                </Text>
            </TouchableWithoutFeedback>
        )}

        {/* ratings, duration $ shipping */}
        <View style={{flexDirection:"row", marginTop: SIZES.padding}}>
            <View style={{flexDirection:"row", alignItems:"center", 
                gap:5, backgroundColor:COLORS.lightGray2, borderRadius:SIZES.base, 
                paddingHorizontal:SIZES.base}}
            >
                <Image 
                    source={icons.star}
                    style={{tintColor: COLORS.primary, 
                    height:15, width:15
                    }}
                />
                <Text style={{color:COLORS.black}}>{foodItem.average_rating}</Text>
                <Text style={{color:COLORS.black}}>({foodItem.ratings_count})</Text>
            </View>
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
        <Text style={styles.InfoTitle}>Size</Text>
        <View style={styles.SizeOuterContainer}>
            {foodItem.prices.map((data, index)=>(
                <TouchableOpacity
                    key={data.size}
                    onPress={() => {setPrice(data)}}
                    style={[styles.SizeBox,{
                        borderColor: data.size == price.size ? COLORS.darkGray : COLORS.primary}]}
                >
                    <Text
                        style={[styles.SizeText,
                        {color:data.size == price.size ? COLORS.white : COLORS.black}]}
                    >
                        {data.size}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        
      </View>

    </View>
  )
}

export default RenderDetails

const styles = StyleSheet.create({
    SizeOuterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
      },
      SizeBox: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZES.padding * 2,
        borderRadius: SIZES.base,
        borderWidth: 2,
      },
      SizeText: {
        color:COLORS.white,
        fontWeight:"500",
        fontSize:18
      },
      InfoTitle: {
        fontSize: 20,
        fontWeight:"500",
        color: COLORS.black,
        marginBottom: SIZES.radius,
        marginTop:SIZES.font
      },
})