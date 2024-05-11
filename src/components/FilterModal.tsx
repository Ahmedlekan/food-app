import { StyleSheet, Text, View, Animated, Modal, TouchableWithoutFeedback, 
    ScrollView } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import { COLORS, constant, icons, SIZES } from '../constants'
import IconButton from './IconButton'
import TwoPointSlider from './TwoPointSlider'
import TextButton from './TextButton'
import TextIconButton from './TextIconButton'

 type FilterModalProps ={
    isVisible: boolean
    onClose:()=> void
 }

 type SectionProps = {
    title: string,
    containerStyle?: any
    children: React.ReactNode
 }

 const Section = ({containerStyle, title, children}: SectionProps)=>{
    return(
        <View style={{marginTop: SIZES.padding, ...containerStyle}}>
            <Text style={{fontWeight:"500", fontSize:16}}>{title}</Text>
            {children}
        </View>
    )
 }

const FilterModal = ({isVisible, onClose}: FilterModalProps) => {
    const [showFilterModal, setShowFilterModal] = useState(isVisible)
    const modalAnimatedValue = useRef(new Animated.Value(0)).current
    const [deliveryTime, setDeliveryTime] = useState(0)
    const [rating, setRating] = useState(0)
    const [tags, setTags] = useState(0)

    useEffect(()=>{
        if(showFilterModal){
            Animated.timing(modalAnimatedValue,{
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start()
        } else{
            Animated.timing(modalAnimatedValue,{
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(()=> onClose())
        }
    },[showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0,1],
        outputRange: [SIZES.height, SIZES.height - 680]
    }) 

    const renderDistance = ()=>{
        return(
            <Section
                title="Distance"
            >
                <View style={{alignItems:"center"}}>
                    <TwoPointSlider
                        values={[3, 10]}
                        min={1}
                        max={20}
                        postfix="km"
                        onValuesChange={(values)=> console.log(values)}
                    />
                </View>

            </Section>
        )
    }

    const renderDeliveryTime = ()=>{
        return(
            <Section
                title="Delivery Time"
                containerStyle={{marginTop: 40}}
            >
                <View style={{flexDirection:"row", flexWrap:"wrap", marginTop: SIZES.radius}}>
                    {constant.delivery_time.map((item, index)=>(
                        <TextButton 
                            key={`delivery_time-${index}`}
                            label={item.label}
                            labelStyle={{
                                color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                            }}
                            buttonContainerStyle={{width:"30%", height:50, alignItems:"center",
                                borderRadius: SIZES.base, margin:5,
                                backgroundColor: item.id == deliveryTime ? COLORS.primary : COLORS.lightGray2
                            }}
                            onPress={()=> setDeliveryTime(item.id)}
                        />
                    ))}
                </View>
            </Section>
        )
    }

    const renderPriceRange = ()=>{
        return (
            <Section
                title="Pricing Range"
            >
                <View style={{alignItems:"center"}}>
                    <TwoPointSlider
                        values={[10, 50]}
                        min={1}
                        max={100}
                        postfix=""
                        prefix='$'
                        onValuesChange={(values)=> console.log(values)}
                    />
                </View>

            </Section>
        )
    }

    const renderRatings = ()=>{
        return(
            <Section
                title="Ratings"
                containerStyle={{marginTop: 40}}
            >
                <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: SIZES.radius}}>
                    {constant.ratings.map((item, index)=>(
                        <TextIconButton 
                            key={`Ratings-${index}`}
                            label={item.label}
                            labelStyle={{
                                color: item.id == rating ? COLORS.white : COLORS.gray,
                            }}
                            containerStyle={{flex:1, height:50, alignItems:"center",
                                borderRadius: SIZES.base, margin:5,
                                backgroundColor: item.id == rating ? COLORS.primary : COLORS.lightGray2
                            }}
                            onPress={()=> setRating(item.id)}
                            icon={icons.star}
                            iconStyle={{tintColor: item.id == rating ? COLORS.white : COLORS.gray}}
                        />
                    ))}
                </View>

            </Section>
        )
    }

    const renderTags = ()=>{
        return(
            <Section 
                title="Tags"
                containerStyle={{marginTop: 40}}
            >
                <View style={{flexDirection:"row", flexWrap:"wrap", marginTop: SIZES.radius}}>
                    {constant.tags.map((item, index)=>(
                        <TextButton 
                            key={`Tags-${index}`}
                            label={item.label}
                            labelStyle={{
                                color: item.id == tags ? COLORS.white : COLORS.gray,
                            }}
                            buttonContainerStyle={{ height:50, alignItems:"center",
                                borderRadius: SIZES.base, margin:4, paddingHorizontal:SIZES.padding,
                                backgroundColor: item.id == tags ? COLORS.primary : COLORS.lightGray2
                            }}
                            onPress={()=> setTags(item.id)}
                        />
                    ))}
                </View>
                
            </Section>
        )
    }

  return (
    <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
    >
        <View style={{flex:1, backgroundColor: COLORS.transparentBlack7}}>
            {/* Transparent background */}
            <TouchableWithoutFeedback onPress={()=> setShowFilterModal(false)}>
                <View style={{position:'absolute', top:0, right:0, left:0, bottom:0}} />
            </TouchableWithoutFeedback>

            <Animated.View style={{width:"100%", height:"100%", position:"absolute", 
                left:0, top: modalY, padding: SIZES.padding, borderTopLeftRadius:SIZES.padding, 
                borderTopRightRadius: SIZES.padding, backgroundColor: COLORS.white}}
            >
                {/* Header */}
                <View style={{flexDirection:"row", alignItems:'center'}}>
                    <Text style={{flex:1, fontWeight:'500', fontSize:18}}>Filter Your Search</Text>
                    <IconButton
                        containerStyle={{
                            borderWidth: 2,
                            borderRadius: 10,
                            borderColor: COLORS.gray2
                        }}
                        iconsStyle={{
                            tintColor: COLORS.gray2
                        }}
                        icon={icons.cross}
                        onPress={()=> setShowFilterModal(false)}
                    />
                </View>


                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 250}}
                >
                    {/* Direction */}
                    {renderDistance()}
                    {/* Delivery time */}
                    {renderDeliveryTime()}
                    {/* price */}
                    {renderPriceRange()}
                    {/* rating */}
                    {renderRatings()}
                    {/* Tags */}
                    {renderTags()}

                </ScrollView>

                <View style={{position:"absolute", bottom:95, left:0, right:0, 
                    height:90, paddingHorizontal:SIZES.padding, paddingVertical: SIZES.radius, 
                    backgroundColor: COLORS.white}}
                >
                    <TextButton 
                        label="Apply Filters" 
                        buttonContainerStyle={{
                            height:50,
                            borderRadius: SIZES.base,
                            backgroundColor: COLORS.primary
                        }} 
                        onPress={()=>{}}
                    />
                </View>
            </Animated.View>
        </View>
    </Modal>
  )
}

export default FilterModal

const styles = StyleSheet.create({})