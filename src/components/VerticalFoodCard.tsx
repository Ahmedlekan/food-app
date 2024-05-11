import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'

type VerticalFoodCardProps = {
    containerStyle:any
    item:any
    onPress: ()=> void
}

const VerticalFoodCard = ({containerStyle, item, onPress}: VerticalFoodCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}
        style={{width:200, padding:SIZES.radius, alignItems:'center', 
        borderRadius: SIZES.radius, backgroundColor:COLORS.lightGray2, ...containerStyle}}
    >
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"row", flex: 1}}>
                <Image source={icons.calories} style={{width:30, height:30}} />
                <Text style={{color:COLORS.darkGray2, fontSize: 15}}>{item.calories} calories</Text>
            </View>
            <Image source={icons.love} style={{width:20, height:20, 
                tintColor: item.isFavourite ? COLORS.primary : COLORS.gray}}
            />
        </View>

       <View style={styles.imageStyleContainer}>
       <Image source={item.image} style={{width:"100%", height:"100%"}} />
       </View>

        <View style={{alignItems:"center", marginTop:-20}}>
            <Text style={{fontSize:17, fontWeight:'500'}}>{item.name}</Text>
            <Text style={{color: COLORS.darkGray}}>{item.description}</Text>
            <Text style={{marginTop:SIZES.base, fontWeight:'700', fontSize:20}}>{item.price}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default VerticalFoodCard

const styles = StyleSheet.create({
    imageStyleContainer:{
        height: 150,
        width: 150,
        alignItems:"center",
        justifyContent:"center",
    }
})