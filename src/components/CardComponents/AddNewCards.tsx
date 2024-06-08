import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { dummyData, SIZES } from '../../constants'
import CardItem from './CardItem'

const AddNewCards = () => {
    const [selectedCard, setSelectedCard] = useState(null)
  return (
    <View style={{marginTop:SIZES.padding}}>
      <Text style={{fontSize:18, fontWeight:"500"}}>Add new cards</Text>
      {dummyData.allCards.map((item, index)=>(
        <CardItem
            key={`NewCard-${item.id}`}
            item={item}
            isSelectetd={`${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`}
            onPress={()=> setSelectedCard({...item, key:"NewCard"})}
        />
      ))}
    </View>
  )
}

export default AddNewCards

const styles = StyleSheet.create({})