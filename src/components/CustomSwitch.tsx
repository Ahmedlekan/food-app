import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

type CustomSwitchProps = {
    value:boolean
    onChange: (a)=> void
}

const CustomSwitch = ({value, onChange}: CustomSwitchProps) => {
  return (
    <TouchableWithoutFeedback onPress={()=> onChange(!value)}>
      <View style={{flexDirection:"row"}}>
        
        {/* Switch */}
        <View style={value ? styles.switchOnContainer : styles.switchOffContainer}>
          <View style={{...styles.dot,
            backgroundColor: value ? COLORS.white : COLORS.gray
            }}
          />
        </View>

        {/* Text */}
        <Text style={{ marginLeft: SIZES.base, color:COLORS.gray}}
        >
          Save me
        </Text>

      </View>
    </TouchableWithoutFeedback>
  )
}

export default CustomSwitch

const styles = StyleSheet.create({
    switchOnContainer:{
        width:40,
        paddingRight:2,
        justifyContent:"center",
        alignItems:"flex-end",
        borderRadius:10,
        backgroundColor: COLORS.primary
    },
    switchOffContainer:{
        width:40,
        paddingLeft:2,
        justifyContent:"center",
        borderWidth: 1,
        borderRadius:10,
        backgroundColor: COLORS.gray3
    },
    dot:{
      width:12,
      height:12,
      borderRadius:6
    }
})