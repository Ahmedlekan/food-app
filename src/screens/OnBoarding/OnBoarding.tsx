import { StyleSheet, Text, View, ImageBackground, 
  Animated, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react'
import { COLORS, constant, images, SIZES } from '../../constants'


const TextButton = ({label, buttonContainerStyle, labelStyle, onPress})=>{
  return(
    <TouchableOpacity style={{alignItems:"center", justifyContent:"center", 
      backgroundColor: COLORS.primary, ...buttonContainerStyle}} onPress={onPress}
    >
      <Text style={{color: COLORS.white, fontWeight:"500", fontSize:18, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}



const OnBoarding = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setcurrentIndex] = useState(0)

  const onViewChangeRef = useRef(({viewableItems, changed})=>{
    setcurrentIndex(viewableItems[0].index)
  })

  const Dots = ()=>{
    const dotPosition = Animated.divide(scrollX, SIZES.width)
    
    return(
      <View style={{flexDirection:"row", 
        justifyContent:"center", alignItems:"center"
        }}
      >
        {constant.onboarding_screens.map((item, index)=>{
  
          const dotColor = dotPosition.interpolate({
            inputRange:[index - 1, index, index + 1],
            outputRange:[COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
            extrapolate:"clamp"
          })
          
          const dotWidth = dotPosition.interpolate({
            inputRange:[index - 1, index, index + 1],
            outputRange:[10, 30, 10],
            extrapolate:"clamp"
          })
          
          return(
            <Animated.View
            key={`dot-${index}`}
            style={{borderRadius:5, marginHorizontal:6, 
              width: dotWidth, height:10, backgroundColor: dotColor
            }}
          />
          )
        })}
      </View>
    )
  }

  const renderHeaderLogo = ()=>{
    return(
      <View style={{
        position:"absolute", left:0, right:0, top: SIZES.height > 800 ? 50 : 25,
        alignItems:"center", justifyContent:'center'
        }}
      >
        <Image source={images.logo_02} 
          resizeMode='contain' 
          style={{ width: SIZES.width * 0.5, height:100}} 
        />
      </View>
    )
  }

  const renderFooter = ()=>{
    return(
      <View style={{height:160}}>
        
        {/* pagination */}
        <View style={{flex:1, justifyContent:"center"}}>
          <Dots />
        </View>

        {/* Button */}
        {currentIndex < constant.onboarding_screens.length - 1 &&
          <View style={{flexDirection:"row", justifyContent:"space-between", 
            paddingHorizontal:SIZES.padding, marginVertical:SIZES.padding
            }}
          >
            <TextButton label="skip" 
              buttonContainerStyle={{backgroundColor:null}} 
              onPress={()=> navigation.replace("SignIn")} 
              labelStyle={{color: COLORS.darkGray2}}
            />

            <TextButton label="Next" 
              buttonContainerStyle={{height:60, width:200, 
                color: COLORS.primary, borderRadius: SIZES.radius
              }}
              labelStyle={{}}
              onPress={()=>{
                flatListRef?.current.scrollToIndex({index: currentIndex + 1, animated: true})
              }}
            />
          </View>
        }
        
        {currentIndex == constant.onboarding_screens.length - 1 && (
          <View style={{paddingHorizontal:SIZES.padding, marginVertical: SIZES.padding}}>
            <TextButton 
              label="Lets Get Started"
              buttonContainerStyle={{height: 60, borderRadius: SIZES.radius}}
              onPress={()=> navigation.replace("SignIn")}
              labelStyle={{}}
            />
          </View>
        )}

      </View>
    )
  }


  return (
    <View style={{flex:1, backgroundColor: COLORS.white}}>
      
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        onScroll={Animated.event(
          [
            {nativeEvent : {contentOffset :{ x: scrollX}}}
          ],
          {useNativeDriver: false}
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        data={constant.onboarding_screens}
        snapToAlignment="center"
        keyExtractor={(item)=> `${item.id}`}
        renderItem={({item, index})=>{
          return(
            <View style={{width:SIZES.width}}>
              
              {/* Header */}
              <View style={{flex:3}}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{flex:1, justifyContent: "flex-end", 
                    alignItems:"center", width:"100%", height:index == 1 ? "92%" : "100%"
                  }}
                >
                  <Image source={item.bannerImage} 
                    resizeMode='contain'
                    style={{width:SIZES.width * 0.8, 
                      height: SIZES.width * 0.8, marginBottom: -SIZES.padding}}
                  />
                </ImageBackground>
              </View>

              {/* Details */}
              <View style={{flex: 1, marginTop:30, alignItems:"center", 
                justifyContent:"center", paddingHorizontal: SIZES.padding}}
              >
                <Text style={{fontSize:25, fontWeight:"500"}}>{item.title}</Text>
                <Text style={{textAlign:"center", marginTop:SIZES.radius, 
                  color: COLORS.darkGray, paddingHorizontal: SIZES.padding, fontSize:16}}
                >
                  {item.description}
                </Text>
              </View>

            </View>
          )
        }}
      />

      {renderFooter()}

    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({})