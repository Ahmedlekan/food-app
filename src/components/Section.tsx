import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{ReactNode} from 'react'
import { COLORS, SIZES } from '../constants'

type SectionProps = {
    title: string
    onPress: ()=> void
    children?: ReactNode
}

const Section = ({title, onPress, children}: SectionProps) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={{flex:1, fontWeight:"500", fontSize:20}}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
            <Text style={{color: COLORS.primary, fontSize: 15}}>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* content */}
      {children}
    </View>
  )
}

export default Section

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:"row", 
        marginHorizontal: SIZES.padding, 
        marginTop:30, 
        marginBottom:20
    }
})