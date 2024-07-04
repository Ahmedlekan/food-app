import React from 'react'
import {View,Text, StyleSheet} from 'react-native';
import { COLORS} from '../constants';
import { BlurView } from 'expo-blur';
import {Home, CartTab, Favorite, Notification} from "../screens/index"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const MainLayout = () => {
    
    const Tab = createBottomTabNavigator()
    
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            
            }}
        >

        <Tab.Screen name='Home' component={Home} 
            options={{
                tabBarIcon: ({focused, color, size}) => (
                <Ionicons
                    name="home"
                    size={25}
                    color={
                    focused ? COLORS.primary : COLORS.lightGray1
                    }
                />
                ),
            }}
        />

        <Tab.Screen name='CartTab' component={CartTab} 
            options={{
                tabBarIcon: ({focused, color, size}) => (
                <Ionicons
                    name="cart"
                    size={25}
                    color={
                        focused ? COLORS.primary : COLORS.lightGray1
                    }
                />
                ),
            }}
        />
        
        <Tab.Screen name='Favorite' component={Favorite} 
            options={{
                tabBarIcon: ({focused, color, size}) => (
                <MaterialIcons
                    name="favorite"
                    size={25}
                    color={
                        focused ? COLORS.primary : COLORS.lightGray1
                    }
                />
                ),
            }}
        />
        
        <Tab.Screen name='Notification' component={Notification} 
            options={{
                tabBarIcon: ({focused, color, size}) => (
                <FontAwesome
                    name="bell"
                    size={25}
                    color={
                        focused ? COLORS.primary : COLORS.lightGray1
                    }
                />
                ),
            }}
        />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.darkGray,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
      },
})

export default MainLayout;
