import "react-native-gesture-handler"
import React, {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainLayout from "./src/screens/MainLayout";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from './src/navigation/CustomDrawer';
import { Notification } from "./src/screens";
import {OnBoarding, SignIn, SignUp, Otp, ForgotPassword, 
  FoodDetails, MyCart, MyCard, AddCard} from "./src/screens/index"


const Stack = createStackNavigator()
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {


useEffect(()=>{
  SplashScreen.hideAsync();
}, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="OnBoarding" >

        {/* <Stack.Screen name='Home' component={CustomDrawer} /> */}
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Otp" component={Otp} /> */}
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="MyCard" component={MyCard} />
        <Stack.Screen name="AddCard" component={AddCard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


