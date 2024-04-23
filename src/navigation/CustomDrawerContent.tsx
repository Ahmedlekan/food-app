import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import { COLORS, constants, dummyData, FONTS, icons, SIZES } from '../constants';
import CustomDrawerItem from './CustomDrawerItem';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
     scrollEnabled={true}
     contentContainerStyle= {{flex: 1}}
    >
      <View style={{flex: 1, paddingHorizontal: SIZES.radius}}>
        {/* close button */}
        <View style={{ justifyContent:'center', alignItems:'flex-start'}}>
            <TouchableOpacity 
                style={{justifyContent:'center', alignItems:'center'}}
                onPress={()=> navigation.closeDrawer()}
            >
                <Image 
                    source={icons.cross} 
                    style={{height:35, width:35, tintColor: COLORS.white}} 
                />
            </TouchableOpacity>
        </View>

        {/* profile image */}
        <TouchableOpacity
            style={{
                flexDirection:"row",
                alignItems:'center',
                marginTop: SIZES.radius
            }}
            onPress={()=> console.log("profile")}
        >
            <Image 
                source={dummyData.myProfile?.profile_image}
                style={{width: 50, height: 50, borderRadius: SIZES.radius}}
            />

            <View style={{marginLeft: SIZES.radius}}>
                <Text style={{color: COLORS.white, ...FONTS.h3}}>{dummyData.myProfile?.name}</Text>
                <Text style={{color: COLORS.white, ...FONTS.body4}}>View Profile</Text>
            </View>
        </TouchableOpacity>

        {/* drawer content list */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
            <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
            <CustomDrawerItem label={constants.screens.my_wallet} icon={icons.wallet} />
            <CustomDrawerItem label={constants.screens.notification} icon={icons.notification} />
            <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite} />

            <View style={styles.lineDivider} />

            <CustomDrawerItem label="Track Your Order" icon={icons.location} />
            <CustomDrawerItem label="Coupons" icon={icons.coupon} />
            <CustomDrawerItem label="Settings" icon={icons.setting} />
            <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
            <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>

        <View style={{marginBottom: SIZES.padding}}>
            <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>

      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    lineDivider:{ 
        height: 1, 
        marginVertical: SIZES.radius, 
        marginLeft: SIZES.radius, 
        backgroundColor:COLORS.lightGray1 
    }
})