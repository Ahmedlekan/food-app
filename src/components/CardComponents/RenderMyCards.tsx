import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { dummyData } from '../../constants'
import CardItem from './CardItem'

const RenderMyCards = () => {
  
  const [selectedCard, setSelectedCard] = useState(null)

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

export default RenderMyCards