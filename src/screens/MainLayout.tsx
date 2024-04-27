import React, {useState} from 'react';
import {View,Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import {Home, Favorite, CartTab, Search, Notification} from "../screens"
import {connect} from "react-redux"
import { COLORS, SIZES, icons, constant, dummyData } from '../constants';
import Header from '../components/Header';

const MainLayout = ({navigation}) => {
    const [selectedTab, setSelectedTab] = useState(constant.screens.home)
    // const progress = useSharedValue(0); // Initial scale value
    // const scale = interpolate(progress.value, [0, 1], [0.8, 1]);
    // const borderRadius = interpolate(progress.value, [0, 1], [0, 26]);
  
    // const animatedStyle = useAnimatedStyle(()=> ({
    //   borderRadius,
    //   transform: [{scale}]
    // }))

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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: "white"
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
    }
})

export default MainLayout;