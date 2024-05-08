import { StyleSheet, Text, View, TouchableOpacity, 
    TouchableWithoutFeedback, Image } from 'react-native'
import Animated from 'react-native-reanimated';
import { COLORS, SIZES } from '../constants';

type TabButtonProps = {
    label: any
    icons: any
    onPress: ()=> void
    isFocused: boolean
}

const TabButton = ({label, icons, onPress, isFocused}) => {
  return (
    <TouchableWithoutFeedback 
        onPress={onPress}
    >
        <Animated.View style={[styles.btnContainer]}>
            <Animated.View style={[styles.tabButton]}>
                <Image source={icons} style={styles.tabImg} />
                {isFocused && (
                    <Text
                        numberOfLines={1}
                        style={{color:COLORS.gray, marginLeft: SIZES.base}}
                    >
                        {label}
                    </Text>
                )}
            </Animated.View>
        </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default TabButton

const styles = StyleSheet.create({
    btnContainer:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    tabButton:{
        width:"80%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius: 25,
    },
    tabImg:{
        width:20, 
        height: 20, 
        tintColor: COLORS.gray
    }
})