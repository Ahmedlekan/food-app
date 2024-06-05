import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import HorizontalFoodCard from '../../components/HorizontalFoodCard'
import Section from '../../components/Section'
import VerticalFoodCard from '../../components/VerticalFoodCard'
import FilterModal from '../../components/FilterModal'

const Home = () => {
  const [selectetdCategoryId, setSelectetdCategoryId] = useState(1)
  const [selectedMenuType, setSelectedMenuType] = useState(1)
  const [menuList, setMenuList] = useState([])
  const [recommends, setRecommends] = useState([])
  const [popularMenu, setPopularMenu] = useState([])
  const [showFilterModal, setShowFilterModal] = useState(false)

  useEffect(()=>{
    handleChangeCategory(selectetdCategoryId, selectedMenuType)
  }, [])

  const handleChangeCategory = (categoryId, menuTypeId)=>{
    //find the menu base on the menutype id
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)
    //set the menu base on the category id
    setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))

    //retreieve the recommend menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended" )
    //set the recommended menu base on the category id
    setRecommends(selectedRecommend?.list.filter((a)=> a.categories.includes(categoryId)))

    //retreieve the recommend menu
    const selectPopularMenu = dummyData.menu.find(a => a.name == "Popular")
    //set the recommended menu base on the category id
    setPopularMenu( selectPopularMenu?.list.filter( (a) => a.categories.includes(categoryId)  ) )
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

  const renderRecommendedSection = ()=>{
    return(
      <Section
        title="Recommended" 
        onPress={()=> console.log("Show all recommended")}
      >
        <FlatList
          horizontal
          data={recommends}
          keyExtractor={(item)=> `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index})=>(
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length -1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: "center"
              }}
              imageStyle={{
                height: 150,
                width: 150,
                marginTop: 30
              }}
              item={item}
              onPress={()=>{}}
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
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == popularMenu.length -1 ? SIZES.padding : 0,
              }}
              item={item}
              onPress={()=> {}}
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
        <HorizontalFoodCard 
          containerStyle={styles.containerStyle}
          imageStyle={styles.imageStyle}
          item={item}
          onPress={()=>{}}
          />
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
  containerStyle:{
    height:130,
    alignItems:'center',
    marginHorizontal:SIZES.padding,
    marginBottom: SIZES.radius
  },
  imageStyle:{
    marginTop: 20,
    height:110,
    width:110
  }
})