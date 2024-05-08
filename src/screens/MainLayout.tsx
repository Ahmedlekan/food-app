import React, {useState, useEffect, useRef} from 'react'
import {View,Text, StyleSheet, TouchableOpacity,Image, FlatList} from 'react-native';
import { COLORS, SIZES, icons, constant, dummyData } from '../constants';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import TabButton from '../components/TabButton';
import {Home, Search, CartTab, Favorite, Notification} from "../screens/index"

const MainLayout = ({navigation}) => {
    const [selectedTab, setSelectedTab] = useState("")
    const flatListRef = useRef<FlatList<any>>(null);

    useEffect(()=>{
        if (selectedTab == constant.screens.home){
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false
            })
        }
        if (selectedTab == constant.screens.search){
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: false
            })
        }
        if (selectedTab == constant.screens.cart){
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: false
            })
        }
        if (selectedTab == constant.screens.favourite){
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated: false
            })
        }
        if (selectedTab == constant.screens.notification){
            flatListRef?.current?.scrollToIndex({
                index: 4,
                animated: false
            })
        }
    },[selectedTab])

    return (
        <View style={styles.container}
        >
            {/* Header */}
            <Header
                containerStyle={{
                    height:50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems:"center"
                }}
                title={selectedTab.toUpperCase()}
                
                leftComponent={
                    <TouchableOpacity 
                        style={styles.leftBtn} 
                        onPress={ ()=> navigation.openDrawer()}
                    >
                        <Image source={icons.menu} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity style={styles.rightBtn}>
                        <Image 
                            source={dummyData?.myProfile?.profile_image} 
                            style={{width:40, height:40, borderRadius: SIZES.radius}}
                        />
                    </TouchableOpacity>
                }
            />

            <View style={{flex: 1}}>
                <FlatList 
                    ref={flatListRef}
                    scrollEnabled={false}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment= "center"
                    snapToInterval={SIZES.width}
                    data={constant.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index})=>(
                        <View style={{width: SIZES.width, height: SIZES.height}}>
                            {item.label == constant.screens.home && <Home />}
                            {item.label == constant.screens.search && <Search />}
                            {item.label == constant.screens.cart && <CartTab />}
                            {item.label == constant.screens.favourite && <Favorite />}
                            {item.label == constant.screens.notification && <Notification />}
                        </View>
                    )}
                />
            </View>

            {/* Footer */}
            <View style={{height: 100, justifyContent:'flex-end'}}>
                {/* shadow effect */}
                <LinearGradient
                    start={{x:0, y: 0}}
                    end={{x:0, y:0.5}}
                    colors={[COLORS.transparent, COLORS.lightGray1]}
                    style={styles.linearGradient}
                />

                {/* Tabs */}
                <View style={styles.tabContainer}>
                    <TabButton 
                        label={constant.screens.home}
                        icons={icons.home}
                        onPress={()=> setSelectedTab(constant.screens.home) }
                        isFocused={ selectedTab == constant.screens.home }
                    />
                    <TabButton 
                        label={constant.screens.search}
                        icons={icons.search}
                        onPress={()=> setSelectedTab(constant.screens.search)}
                        isFocused={ selectedTab == constant.screens.search }
                    />
                    <TabButton 
                        label={constant.screens.cart}
                        icons={icons.cart}
                        onPress={()=> setSelectedTab(constant.screens.cart)}
                        isFocused={ selectedTab == constant.screens.cart}
                    />
                    <TabButton 
                        label={constant.screens.favourite}
                        icons={icons.favourite}
                        onPress={()=> setSelectedTab(constant.screens.favourite)}
                        isFocused={ selectedTab == constant.screens.favourite}
                    />
                    
                    <TabButton 
                        label={constant.screens.notification}
                        icons={icons.favourite}
                        onPress={()=> setSelectedTab(constant.screens.notification)}
                        isFocused={ selectedTab == constant.screens.notification}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: COLORS.white
    },
    leftBtn:{
        width: 40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor: COLORS.gray2,
        borderRadius:  SIZES.radius
    },
    rightBtn:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor: COLORS.gray2,
        borderRadius: SIZES.radius
    },
    linearGradient:{
        position:'absolute',
        top: -20,
        left:0,
        right:0,
        height:100,
        borderTopLeftRadius:15,
        borderTopRightRadius: 15
    },
    tabContainer:{
        flex: 1,
        flexDirection:"row",
        paddingHorizontal: SIZES.radius,
        paddingBottom: 10,
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.white,
    },
    bgC:{
        backgroundColor: COLORS.primary,
    }
})

export default MainLayout;