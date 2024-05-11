import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState} from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import { COLORS, constant, dummyData, FONTS, icons, SIZES } from '../constants';
import CustomDrawerItem from './CustomDrawerItem';
import { Notification } from '../screens';


const CustomDrawerContent = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0)

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
            
                <CustomDrawerItem 
                    label={constant.screens.home} 
                    icon={icons.home}
                    onPress={()=> {
                        navigation.navigate("MainLayout")
                        setActiveIndex(0)
                    }}
                    activeIndex={activeIndex === 0 ? styles.bgC : null}
                />
                <CustomDrawerItem 
                    label={constant.screens.my_wallet} 
                    icon={icons.wallet}
                    onPress={()=> {
                        navigation.navigate("MainLayout")
                        setActiveIndex(1)
                    }}
                    activeIndex={activeIndex === 1 ? styles.bgC : null}
                />
                <CustomDrawerItem 
                    label={constant.screens.notification} 
                    icon={icons.notification}
                    onPress={()=> {
                        navigation.navigate("Notification")
                        setActiveIndex(2)
                    }}
                    activeIndex={activeIndex === 2 ? styles.bgC : null}
                />
                <CustomDrawerItem 
                    label={constant.screens.favourite} 
                    icon={icons.favourite}
                    onPress={()=> {
                        navigation.navigate("MainLayout")
                        setActiveIndex(3)
                    }}
                    activeIndex={activeIndex === 3 ? styles.bgC : null}
                />

            <View style={styles.lineDivider} />

            <CustomDrawerItem 
                label="Track Your Order" 
                icon={icons.location}
                onPress={()=> {
                    navigation.navigate("MainLayout")
                    setActiveIndex(4)
                }}
                activeIndex={activeIndex === 4 ? styles.bgC : null}
            />
            <CustomDrawerItem 
                label="Coupons" 
                icon={icons.coupon}
                onPress={()=> {
                    navigation.navigate("MainLayout")
                    setActiveIndex(5)
                }}
                activeIndex={activeIndex === 5 ? styles.bgC : null}
            />
            <CustomDrawerItem 
                label="Settings" 
                icon={icons.setting}
                onPress={()=> {
                    navigation.navigate("MainLayout")
                    setActiveIndex(6)
                }}
                activeIndex={activeIndex === 6 ? styles.bgC : null}
            />
            <CustomDrawerItem 
                label="Invite a friend" 
                icon={icons.profile}
                onPress={()=> {
                    navigation.navigate("MainLayout")
                    setActiveIndex(7)
                }}
                activeIndex={activeIndex === 7 ? styles.bgC : null}
            />
            <CustomDrawerItem 
                label="Help Center" 
                icon={icons.help}
                onPress={()=> {
                    navigation.navigate("MainLayout")
                    setActiveIndex(8)
                }}
                activeIndex={activeIndex === 8 ? styles.bgC : null}
            />

        </View>

        <View style={{marginBottom: SIZES.padding}}>
            <CustomDrawerItem 
                label="Logout" 
                icon={icons.logout}
                onPress={()=> {
                    navigation.navigate("MainLayout")
                    setActiveIndex(9)
                }}
                activeIndex={activeIndex === 9 ? styles.bgC : null}
            />
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
    },
    bgC:{
        backgroundColor: COLORS.transparentBlack1,
    }
})