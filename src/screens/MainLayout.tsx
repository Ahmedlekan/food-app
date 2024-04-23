import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
// import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';


const MainLayout = () => {
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
            <Text>MainLayout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: "white"
    }
})

export default MainLayout;