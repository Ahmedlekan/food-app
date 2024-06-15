import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import { COLORS, icons, SIZES } from '../../constants'
import { dummyData } from '../../constants'
import CardItem from '../../components/CardComponents/CardItem'
import TextButton from '../../components/TextButton'


const MyCard = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null)

  // rendercards component
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

  // add new cards component
  const addNewCards = () => {
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

  // add footer
  const renderFooter = () => {
    return (
      <View style={{
          paddingTop:SIZES.radius,
          paddingBottom:SIZES.padding,
          paddingHorizontal:SIZES.padding
      }}>
        <TextButton
          disabled={selectedCard == null}
          buttonContainerStyle={{
              height:60, borderRadius: SIZES.radius,
              backgroundColor:selectedCard == null ? COLORS.gray : COLORS.primary
          }}
          label={selectedCard?.key == "NewCard" ? "Add" : "Place your Order"}
          onPress={()=>{
            if(selectedCard?.key === "NewCard"){
              navigation.navigate("AddCard", {selectedCard: selectedCard})
            } else{
              navigation.navigate("CheckOut", {selectedCard:selectedCard})
            }
          }}
        />
      </View>
    )
  }


  return (
    <View>
      {/* header */}
      <Header
        title='MY CARDS'
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

      {/* cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow:1, marginTop:SIZES.radius,paddingHorizontal:SIZES.padding,
          paddingBottom: SIZES.padding
        }}
        style={{height:'78%'}}
      >
        {renderMyCards()}
        {addNewCards()}
      </ScrollView>

      {/* footer */}
      {renderFooter()}

    </View>
  )
}

export default MyCard

const styles = StyleSheet.create({})