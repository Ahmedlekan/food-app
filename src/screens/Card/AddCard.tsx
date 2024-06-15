import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import utils from '../../utils/Utils'
import Header from '../../components/Header'
import IconButton from '../../components/IconButton'
import { icons, SIZES, COLORS, images } from '../../constants'
import FormInput from '../../components/FormInput'
import RadioButton from '../../components/RadioButton'
import TextButton from '../../components/TextButton'

const AddCard = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null)

  const [cardNumber, setCardNumber] = useState<string>("")
  const [cardNumberError, setCardNumberError] = useState<string>("")
  const [cardName, setCardName] = useState<string>("")
  const [cardNameError, setCardNameError] = useState<string>("")
  const [expiryDate, setExpiryDate] = useState<string>("")
  const [expiryDateError, setExpiryDateError] = useState<string>("")
  const [cvv, setCvv] = useState<string>("")
  const [cvvError, setCvvError] = useState<string>("")
  const [isRemember, setIsRemember] = useState<boolean>(false)
  
  useEffect(()=>{
    let {selectedCard} = route.params
    setSelectedCard(selectedCard)
  },[])

  function isEnableCard (){
    return cardNumber !== "" && cardName !=="" && expiryDate !==""
    && cvv !=="" && cardNumberError ==="" && cardNameError ===""
    && expiryDateError ==="" && cvvError ===""
  }

  const renderForm = () =>(
    <View style={{marginTop:SIZES.padding * 2}}>
      <FormInput
        label='Card Number'
        keyboardType="number-pad"
        value={cardNumber}
        maxLength={19}
        onChange={(value)=>{
          setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
          utils.validateInput(value, 19, setCardNumberError)
        }}
        errorMsg={cardNumberError}
        appendCompenent={
          <View style={{justifyContent:"center"}}>
                <Image 
                  source={cardNumber =="" || (cardNumber != "" && cardNumberError == "") ? icons.correct : icons.cross}
                  style={{height:20, width:20, 
                    tintColor: cardNumber == "" ? COLORS.gray : (cardNumber != "" && cardNumberError == "") ? COLORS.green : COLORS.red  }}
                />
              </View>
        }
      />
      
      <FormInput
        label='Cardholder Name'
        value={cardName}
        onChange={(value)=>{
          utils.validateInput(value, 1, setCardNameError)
          setCardName(value)
        }}
        errorMsg={cardNameError}
        appendCompenent={
          <View style={{justifyContent:"center"}}>
                <Image 
                  source={cardName =="" || (cardName != "" && cardNameError == "") ? icons.correct : icons.cross}
                  style={{height:20, width:20, 
                    tintColor: cardName == "" ? COLORS.gray : (cardName != "" && cardNameError == "") ? COLORS.green : COLORS.red  }}
                />
              </View>
        }
      />

      <View style={{flexDirection:"row", marginTop:SIZES.radius}}>
        <FormInput
          label='Expiry Date'
          value={expiryDate}
          placeHolder='MM/YY'
          keyboardType="number-pad"
          maxLength={5}
          containerStyle={{flex:1}}
          onChange={(value)=>{
            utils.validateInput(value, 5, setExpiryDateError)
            setExpiryDate(value)
          }}
          appendCompenent={
            <View style={{justifyContent:"center"}}>
                  <Image 
                    source={expiryDate =="" || (expiryDate != "" && expiryDateError == "") ? icons.correct : icons.cross}
                    style={{height:20, width:20, 
                      tintColor: expiryDate == "" ? COLORS.gray : (expiryDate != "" && expiryDateError == "") ? COLORS.green : COLORS.red  }}
                  />
                </View>
          }
        />
        <FormInput
          label='CVV'
          value={cvv}
          placeHolder='cvv'
          keyboardType="number-pad"
          maxLength={3}
          containerStyle={{flex:1, marginLeft: SIZES.radius}}
          onChange={(value)=>{
            utils.validateInput(value, 3, setExpiryDateError)
            setCvv(value)
          }}
          appendCompenent={
            <View style={{justifyContent:"center"}}>
                  <Image 
                    source={cvv =="" || (cvv != "" && cvvError == "") ? icons.correct : icons.cross}
                    style={{height:20, width:20, 
                      tintColor: cvv == "" ? COLORS.gray : (cvv != "" && cvvError == "") ? COLORS.green : COLORS.red  }}
                  />
                </View>
          }
        />
      </View>

      {/* remember */}
      <View style={{
        alignItems:"flex-start", marginTop:SIZES.padding
      }}>
        <RadioButton
          label='Remember this card details'
          isSelected={isRemember}
          onPress={()=> setIsRemember(prev => !prev)}
        />
      </View>

    </View>
  ) 

  return (
    <View>
      {/* header */}
      <Header
        title='ADD NEW CARD'
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
        contentContainerStyle={{flexGrow:1, paddingHorizontal:SIZES.padding,
          paddingBottom:SIZES.padding * 2
        }}
      >
        {/* card image */}
        <ImageBackground
          source={images.card}
          style={{
            height:200, width:"100%", marginTop:SIZES.radius,
            borderRadius:SIZES.radius, overflow:"hidden"
          }}
        >
          <Image
            source={selectedCard?.icon}
            resizeMode='contain'
            style={{position:"absolute", top:20, right:20,
              height:40, width:80
            }}
          />

          <View style={{
            position:"absolute", bottom:10, left:0, right:0,
            paddingHorizontal:SIZES.padding
          }}>
            <Text style={{color:COLORS.white, fontSize:18, fontWeight:"500"}}>
              {cardName}
            </Text>

            <View style={{flexDirection:"row"}}>
              <Text style={{flex:1, color:COLORS.white, }}>
                {cardNumber}
              </Text>
              <Text style={{color:COLORS.white}}>
                {expiryDate}
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* form */}
        {renderForm()}
        
      </KeyboardAwareScrollView>

      {/* footer */}
      <View style={{
        paddingTop:SIZES.radius,paddingBottom:SIZES.padding,
        paddingHorizontal:SIZES.padding
      }}>
        <TextButton
          label='Add Card'
          disabled={!isEnableCard()}
          buttonContainerStyle={{
            height:60, borderRadius:SIZES.radius,
            backgroundColor: isEnableCard() ? COLORS.primary : COLORS.transparentPrimray
          }}
          onPress={()=> navigation.goBack()}
        />
      </View>
    </View>
  )
}

export default AddCard

const styles = StyleSheet.create({})