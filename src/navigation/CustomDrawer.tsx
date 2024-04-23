import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, FONTS, SIZES, icons, dummyData} from "../constants"
import { MainLayout } from '../screens';
import CustomDrawerContent from './CustomDrawerContent';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';


const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
  const progress = useSharedValue(0); // Initial scale value

  const scale = interpolate(progress.value, [0, 1], [0.8, 1]);
  const borderRadius = interpolate(progress.value, [0, 1], [0, 26]);

  const animatedStyle = useAnimatedStyle(()=> ({
    borderRadius,
    transform: [{scale}]
  }))

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        screenOptions={{
            sceneContainerStyle:{backgroundColor:"transparent"},
            drawerStyle:{flex: 1,width:'65%',paddingRight: 20,backgroundColor:'transparent'},
            overlayColor:'transparent',
            drawerType: 'slide',
        }}
        initialRouteName='MainLayout'
        drawerContent={props =>{
          return(
            <CustomDrawerContent {...props} />
          )
        }}
      >
        <Drawer.Screen name='MainLayout' 
          component={MainLayout} 
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})