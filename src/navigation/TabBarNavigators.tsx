import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home, Search, Notification, Favorite, CartTab } from '../screens';;
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import TabButton from '../components/TabButton';
import { COLORS, SIZES, icons, constant, dummyData } from '../constants';


const Tab = createBottomTabNavigator()

const TabNavigators = () => {
    
    const [selectedTab, setSelectedTab] = useState(constant.screens.home)

  return (
    <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
    }}>
    
        <Tab.Screen name='Home' component={Home} 
            options={{
                tabBarIcon: ({focused, color}) => (
                    <TabButton 
                        label={constant.screens.home} 
                        icons={icons.home} 
                        
                    />
                ),
            }}
        />

        <Tab.Screen name='Search' component={Search} 
            options={{
                tabBarIcon: ({focused, color}) => (
                <TabButton 
                    label={constant.screens.search} 
                    icons={icons.search}
                />
                ),
            }}
        />
        
        <Tab.Screen name='Notification' component={Notification} 
        options={{
            tabBarIcon: ({focused, color}) => (
            <TabButton 
                label={constant.screens.cart} 
                icons={icons.cart}
                
                
            />
            ),
        }}
        />
        
        <Tab.Screen name='Favorite' component={Favorite} 
            options={{
                tabBarIcon: ({focused, color}) => (
                <TabButton 
                    label={constant.screens.favourite} 
                    icons={icons.favourite}
                    
                />
                ),
            }}
        />
    
    </Tab.Navigator>
  )
}

export default TabNavigators

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
      },
})