import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import HorizontalFoodCard from '../../components/HorizontalFoodCard'
import Section from '../../components/Section'
import VerticalFoodCard from '../../components/VerticalFoodCard'
import FilterModal from '../../components/FilterModal'
import { useNavigation, NavigationProp  } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, FoodItem } from '../../type'
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header'
import { useProductStore } from '../../store/useStore'

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
// type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

// type Props = {
//   navigation: HomeScreenNavigationProp;
//   route: HomeScreenRouteProp;
// };

const Home= ({navigation}) => {
  
  const [selectetdCategoryId, setSelectetdCategoryId] = useState<number>(1)
  const [selectedMenuType, setSelectedMenuType] = useState<number>(1)
  const [menuList, setMenuList] = useState([])
  const [recommends, setRecommends] = useState([])
  const [popularMenu, setPopularMenu] = useState([])
  const [showFilterModal, setShowFilterModal] = useState(false)

  useEffect(()=>{
    handleChangeCategory(selectetdCategoryId, selectedMenuType)
  }, [])

  const handleChangeCategory = (categoryId, menuTypeId)=>{
    const selectedCategory = dummyData.categories.find(category => category.id === categoryId);
    if (!selectedCategory) {
      console.error('Category not found');
      return;
    }
    //find the menu base on the menutype id
    let selectedMenu = dummyData.menu.find(menu => menu.id == menuTypeId)
    if(selectedMenu){
      setMenuList(selectedMenu?.list?.filter(item => selectedCategory.foodList.includes(item)))
    }

    //retreieve the recommend menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended" )
    if(selectedRecommend){
      setRecommends(selectedRecommend?.list.filter((item)=> selectedCategory.foodList.includes(item)))
    }

    //retreieve the recommend menu
    const selectPopularMenu = dummyData.menu.find(a => a.name == "Popular")
    if(selectPopularMenu){
      setPopularMenu( selectPopularMenu?.list.filter( (item) => selectedCategory.foodList.includes(item)) )
    }
  }

  const renderSearch = ()=>{
    return (
      <View style={styles.searchContainer}>
        <Image source={icons.search} style={styles.btn} />
        <TextInput style={{flex: 1, marginLeft: SIZES.radius}} placeholder='...Search food' />
        <TouchableOpacity onPress={()=> setShowFilterModal(true)}>
          <Image source={icons.filter} style={styles.btn} />
        </TouchableOpacity>
      </View>
    )
  }

  function renderMenuTypes(){
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> `${item.id}`}
        horizontal
        data={dummyData.menu}
        contentContainerStyle={{marginTop: 20, marginBottom: 20}}
        renderItem={({item, index})=> (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight: index == dummyData.menu.length -1 ? SIZES.padding : 0
            }}
            onPress={()=>{
              setSelectedMenuType(item.id)
              handleChangeCategory(selectetdCategoryId, item.id)
            }}
          >
            <Text 
              style={{
                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black, 
                fontWeight: "500"
              }}
            >
              {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    )
  }

  const handlePress = (item:FoodItem)=>{
    navigation.navigate('FoodDetails', { item });
  }

  const renderRecommendedSection = ()=>{
    return(
      <Section
        title="Recommended" 
        onPress={()=> {}}
      >
        <FlatList
          horizontal
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => ( 
            <HorizontalFoodCard
              item={item}
              price={item.prices[0]}
              onPress={()=>handlePress(item)}
            />
          )}
        />
      </Section>
    )
  }

  const renderPopularSection = ()=>{
    return(
      <Section
        title='Popular near me'
        onPress={()=> {}}
      >
        <FlatList
          horizontal
          data={popularMenu}
          keyExtractor={(item)=> `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index})=>(
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index === 0 ? SIZES.padding : 18,
                marginRight: index === popularMenu.length -1 ? SIZES.padding : 0,
              }}
              item={item}
              price={item.prices[2]}
              onPress={()=> handlePress(item)}
            />
          )}
        />
      </Section>
    )
  }

  const renderFoodCategories = ()=>{
    return(
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=> `${item.id}`}
        data={dummyData.categories}
        renderItem={({item, index})=>(
          <TouchableOpacity
            style={{
              flexDirection:'row', height:55, marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight: index == dummyData.categories.length -1 ? SIZES.padding : 0,
              paddingHorizontal:8, borderRadius: SIZES.radius,
              backgroundColor: selectetdCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
            }}
            onPress={()=>{
              setSelectetdCategoryId(item.id)
              handleChangeCategory(item.id, selectedMenuType)
            }}
          >
            <Image source={item.icon} style={{marginTop:5, height:50, width:50}} />
            <Text style={{alignSelf:"center", marginRight:SIZES.base, 
              color: selectetdCategoryId == item.id ? COLORS.white : COLORS.darkGray, fontWeight:"500"
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    )
  }

  const renderDeliveryTo = ()=>{
    return(
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Text style={{color:COLORS.primary, fontWeight:"600", fontSize:18}}>DELIVERY TO</Text>
        <TouchableOpacity 
          style={{flexDirection:"row", alignItems:"center", marginTop: SIZES.base}}
        >
          <Text style={{fontSize: 15, fontWeight:"500"}}>{dummyData?.myProfile?.address}</Text>
          <Image source={icons.down_arrow} 
            style={{height:20, width:20, marginLeft:SIZES.base}}
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.homeContainer}>
      {/* Header */}
        <Header
            leftComponent={
                <TouchableOpacity 
                    style={styles.leftBtn} 
                    onPress={ ()=> navigation.openDrawer()}
                >
                    <Image source={icons.menu} />
                </TouchableOpacity>
            }
            title='HOME'
            rightComponent={
                <TouchableOpacity style={styles.rightBtn}>
                    <Image 
                        source={dummyData?.myProfile?.profile_image} 
                        style={{width:40, height:40, borderRadius: SIZES.radius}}
                    />
                </TouchableOpacity>
            }
        />

      {/* saecrh */}
      {renderSearch()}
      
      {/* filter */}
      {showFilterModal && (
        <FilterModal
        isVisible={showFilterModal}
        onClose={()=> setShowFilterModal(false)}
      />
      )}

      {/* list */}
      <FlatList
       showsHorizontalScrollIndicator={false}
       ListHeaderComponent={
        <View>
          {renderDeliveryTo()}
          {renderFoodCategories()}
          {renderPopularSection()}
          {renderRecommendedSection()}
          {renderMenuTypes()}
        </View>
       }
       data={menuList}
       keyExtractor={(item)=> `${item.id}`}
       renderItem={({item, index})=>(
        <View>
          <HorizontalFoodCard
            onPress={()=>handlePress(item)}
            item={item}
            price={item.prices[0]}
          />
        </View>
       )}
       ListFooterComponent={
        <View style={{height:200}} />
       }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer:{
    flex: 1,
    backgroundColor:COLORS.white
  },
  searchContainer:{
    flexDirection:'row', 
    height:40, 
    alignItems:'center',
    marginHorizontal:SIZES.padding,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2
  },
  btn:{
    height:20, 
    width:20, 
    tintColor: COLORS.black
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
})