import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainLayout } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from './src/navigation/CustomDrawer';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';



const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home" >

        <Stack.Screen name='Home' component={CustomDrawer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


