import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { COLORS, dummyData, icons, SIZES } from '../../constants'
import HorizontalFoodCard from '../../components/HorizontalFoodCard'

const Home = () => {
  const [selectetdCategoryId, setSelectetdCategoryId] = useState(1)
  const [selectedMenuType, setSelectedMenuType] = useState(2)
  const [menuList, setMenuList] = useState([])

  useEffect(()=>{
    handleChangeCategory(selectetdCategoryId, selectedMenuType)
  }, [])

  const handleChangeCategory = (categoryId, menuTypeId)=>{
    //find the menu base on the menutype id
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)
    //set the menu base on the category id
    setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
  }

  const renderSearch = ()=>{
    return (
      <View style={styles.searchContainer}>
        <Image source={icons.search} style={styles.btn} />
        <TextInput style={{flex: 1, marginLeft: SIZES.radius}} placeholder='...Search food' />
        <TouchableOpacity onPress={()=>{}}>
          <Image source={icons.filter} style={styles.btn} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.homeContainer}>
      {/* saecrh */}
      {renderSearch()}

      {/* list */}
      <FlatList
       showsHorizontalScrollIndicator={false}
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