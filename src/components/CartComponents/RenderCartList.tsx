import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import { SwipeListView } from 'react-native-swipe-list-view'
import SteperInput from '../FoodDetails/SteperInput'
import IconButton from '../IconButton'

const RenderCartList = () => {
  const [myCartList, setmyCartList] = useState(dummyData.myCart)

  const updateQuantityHandler = (newQty, id)=>{
    const myNewCartList = myCartList.map( (cl)=> (
      cl.id === id ? {...cl, qty:newQty} : cl
    ) ) 

    setmyCartList(myNewCartList)
  }

  const removeMyCartHandler = (id)=>{
    let myNewCartList = [...myCartList]
    const myCartListIndex = myNewCartList.findIndex(cart => cart.id === id)

    myNewCartList.splice(myCartListIndex, 1)
    setmyCartList(myNewCartList)
  }

  return (
    <SwipeListView
      data={myCartList}
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={{
        marginTop: SIZES.radius, paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding * 2, 
      }}
      disableRightSwipe={true}
      rightOpenValue={-75}
      renderItem={(data, rowMap)=> (
        <View style={{backgroundColor:COLORS.lightGray2, ...styles.cartItemContainer}}>
          <View style={{height:100, width:90, marginLeft:-10}}>
            <Image
              source={data.item.image}
              resizeMode='contain'
              style={{width:"100%", height:"100%", position:"absolute", top:10}}
            />
          </View>
          <View style={{flex:1}}>
            <Text style={{fontSize:17}}>{data.item.name}</Text>
            <Text style={{color:COLORS.primary}}>{data.item.price}</Text>
          </View>

          <SteperInput
            containerStyle={{height:50, width:125, backgroundColor:COLORS.white}}
            value={data.item.qty}
            onAdd={()=> updateQuantityHandler(data.item.qty + 1, data.item.id)}
            onMinus={()=> {
              if(data.item.qty > 1){
                updateQuantityHandler(data.item.qty - 1, data.item.id)
              }
            }}
          />

        </View>
      )}

      renderHiddenItem={(data, rowMap)=>(
        <IconButton
          containerStyle={{
            flex:1, justifyContent:"flex-end",backgroundColor: COLORS.primary, ...styles.cartItemContainer
          }}
          icon={icons.delete_icon}
          iconsStyle={{marginRight:10}}
          onPress={()=> removeMyCartHandler(data.item.id)}
        />
      )}
    />
  )
}

export default RenderCartList

const styles = StyleSheet.create({
  cartItemContainer:{
    flexDirection:'row',
    alignItems:"center",
    marginTop:SIZES.radius,
    paddingHorizontal:SIZES.radius,
    borderRadius:SIZES.radius,
    height:100, 
  },

})