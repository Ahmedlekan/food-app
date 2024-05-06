import React, {useState, useEffect} from 'react'
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import { COLORS, SIZES, icons, constant, dummyData } from '../constants';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import TabButton from '../components/TabButton';

const MainLayout = ({navigation}) => {
    const [selectedTab, setSelectedTab] = useState("")
    // const progress = useSharedValue(0); // Initial scale value
    // const scale = interpolate(progress.value, [0, 1], [0.8, 1]);
    // const borderRadius = interpolate(progress.value, [0, 1], [0, 26]);
  
    // const animatedStyle = useAnimatedStyle(()=> ({
    //   borderRadius,
    //   transform: [{scale}]
    // }))

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const searchTabFlex = useSharedValue(1)
    const searchTabColor = useSharedValue(COLORS.white)
    const cartTabFlex = useSharedValue(1)
    const cartTabColor = useSharedValue(COLORS.white)
    const favoriteTabFlex = useSharedValue(1)
    const favoriteTabColor = useSharedValue(COLORS.white)
    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)


    return (
        <View style={styles.container}
        >
            {/* Header */}
            <Header
                containerStyle={{
                    height:50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems:"center"
                }}
                title={selectedTab.toUpperCase()}
                
                leftComponent={
                    <TouchableOpacity 
                        style={styles.leftBtn} 
                        onPress={ ()=> navigation.openDrawer()}
                    >
                        <Image source={icons.menu} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity style={styles.rightBtn}>
                        <Image 
                            source={dummyData?.myProfile?.profile_image} 
                            style={{width:40, height:40, borderRadius: SIZES.radius}}
                        />
                    </TouchableOpacity>
                }
            />

            <View style={{flex: 1}}>
                <Text>MainLayout</Text>
            </View>

            {/* Footer */}
            <View style={{height: 100, justifyContent:'flex-end'}}>
                {/* shadow effect */}
                <LinearGradient
                    start={{x:0, y: 0}}
                    end={{x:0, y:0.5}}
                    colors={[COLORS.transparent, COLORS.lightGray1]}
                    style={styles.linearGradient}
                />

                {/* Tabs */}
                <View style={styles.tabContainer}>
                    <TabButton 
                        label={constant.screens.home}
                        icons={icons.home}
                        onPress={()=> setSelectedTab(constant.screens.home) }
                        isFocused={ selectedTab == constant.screens.home }
                    />
                    <TabButton 
                        label={constant.screens.search}
                        icons={icons.search}
                        onPress={()=> setSelectedTab(constant.screens.search)}
                        isFocused={ selectedTab == constant.screens.search }
                    />
                    <TabButton 
                        label={constant.screens.cart}
                        icons={icons.cart}
                        onPress={()=> setSelectedTab(constant.screens.cart)}
                        isFocused={ selectedTab == constant.screens.cart}
                    />
                    <TabButton 
                        label={constant.screens.favourite}
                        icons={icons.favourite}
                        onPress={()=> setSelectedTab(constant.screens.favourite)}
                        isFocused={ selectedTab == constant.screens.favourite}
                    />
                    
                    <TabButton 
                        label={constant.screens.notification}
                        icons={icons.favourite}
                        onPress={()=> setSelectedTab(constant.screens.notification)}
                        isFocused={ selectedTab == constant.screens.notification}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: COLORS.white
    },
    leftBtn:{
        width: 40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor: COLORS.gray2,
        borderRadius:  SIZES.radius
    },
    rightBtn:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor: COLORS.gray2,
        borderRadius: SIZES.radius
    },
    linearGradient:{
        position:'absolute',
        top: -20,
        left:0,
        right:0,
        height:100,
        borderTopLeftRadius:15,
        borderTopRightRadius: 15
    },
    tabContainer:{
        flex: 1,
        flexDirection:"row",
        paddingHorizontal: SIZES.radius,
        paddingBottom: 10,
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.white,
        
    }
})

export default MainLayout;