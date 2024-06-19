import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import { LinearGradient } from 'expo-linear-gradient'
import MapViewDirections from 'react-native-maps-directions'
import IconButton from '../../components/IconButton'
import utils from '../../utils/Utils'
import { COLORS, dummyData, icons, SIZES } from '../../constants'

interface LocationType {
  latitude: number;
  longitude: number;
}

interface RegionType {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Map = ({navigation}) => {

  const mapView = useRef<MapView>(null)
  const [region, setRegion] = useState<RegionType | null>(null)
  const [toLoc, setToLoc] = useState<LocationType | null>(null)
  const [fromLoc, setFromLoc] = useState<LocationType | null>(null)
  const [angle, setAngle] = useState<number>(0)

  const [isReady, setIsReady] = useState<boolean>(false)
  const [duration, setDuration] = useState<string>("")

  useEffect(()=>{
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919222,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    }

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919222,
    }

    setToLoc(destination)
    setFromLoc(dummyData.fromLocs[0])
    setRegion(initialRegion)

  }, [])

  const renderMap = () =>{
    return(
      <MapView
        style={{flex:1}}
        ref={mapView}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
      >
        {fromLoc && (
          <Marker
          key="FromLoc"
          coordinate={fromLoc}
          tracksViewChanges={false}
          rotation={angle}
          anchor={{ x: 0.5, y: 0.5 }}
          >
            <Image
              source={icons.navigator}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          </Marker>
        )}
        
        { toLoc && (
          <Marker
          key="ToLoc"
          coordinate={toLoc}
          tracksViewChanges={false}
          anchor={{ x: 0.5, y: 0.5 }}
          >
            <Image
              source={icons.location_pin}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          </Marker>
        )}

        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={process.env.EXPO_PUBLIC_GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={ result =>{
            setDuration(Math.ceil(result.duration).toString())

            if(!isReady){
              // fit the map based on the route
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding:{
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1
                }
              })

              // repositon the navigator
              if(result.coordinates.length >= 2){
                let angle = utils.calculateAngle(result.coordinates)

                setAngle(angle)
              }

              setIsReady(true)
            }

          } }
        />

      </MapView>
    )
  }

  const renderHeaderButton = ()=>(
    <View>
      <IconButton
        containerStyle={{
          position:"absolute", top: -770, left:SIZES.padding,
          ...styles.buttonStyle
        }}
        icon={icons.back}
        iconsStyle={{width:20, height:20, tintColor:COLORS.gray2}}
        onPress={()=> navigation.goBack()}
      />

      <View style={{position:"absolute", top: -770, right:SIZES.padding,}}>
        <IconButton
          containerStyle={{...styles.buttonStyle}}
          icon={icons.globe}
          iconsStyle={{width:20, height:20, tintColor:COLORS.gray2}}
        />
        
        <IconButton
          containerStyle={{marginTop: SIZES.radius, ...styles.buttonStyle}}
          icon={icons.focus}
          iconsStyle={{width:20, height:20, tintColor:COLORS.gray2}}
        />
      </View>
    </View>
  )

  const renderInfo = ()=>(
    <View style={{position:"absolute", bottom:0, width:"100%"}}>
      {/* linear gradient */}
      <LinearGradient
        start={{x:0, y:0}}
        end={{x:0, y:1}}
        colors={[
          COLORS.transparent, COLORS.lightGray1
        ]}
        style={{position:"absolute", top:-20, left:0, right:0,
          height: 50,
        }}
      />

      {/* info container */}
      <View style={{
        padding:SIZES.padding, borderTopLeftRadius:30, borderTopRightRadius:30,
        backgroundColor:COLORS.white
      }}>
        
        <View style={{ flexDirection:"row", alignItems:"center"}}>
          <Image
            source={icons.clock}
            style={{width:40, height:40, tintColor:COLORS.black}}
          />

          <View style={{marginLeft:SIZES.padding}}>
            <Text style={{color:COLORS.gray}}>Your delivery time</Text>
            <Text style={{fontSize:16, fontWeight:"500"}}>{duration} minutes</Text>
          </View>
        </View>

        <View style={{
          flexDirection:"row", alignItems:"center", marginTop:SIZES.padding}}
        >
          <Image source={icons.focus} style={{width:40, height:40, tintColor:COLORS.black}} />
          <View style={{marginLeft:SIZES.padding}}>
            <Text style={{color:COLORS.gray}}>Your address</Text>
            <Text style={{fontSize:16, fontWeight:"500"}}>6, odeniyi ishola tsreet</Text>
          </View>
        </View>

        <TouchableOpacity style={{
          flexDirection:"row", height:70, marginTop:SIZES.padding,
          borderRadius:SIZES.radius, paddingHorizontal:SIZES.radius,
          alignItems:"center", justifyContent:"center", backgroundColor:COLORS.primary
          }}
        >
          <Image source={icons.profile} style={{width:40, height:40, borderRadius:5}} />
          <View style={{flex:1, marginLeft:SIZES.radius}}>
            <Text style={{color:COLORS.white, fontSize:16, fontWeight:"500"}}>Ahmed Lekan</Text>
            <Text style={{color:COLORS.white}}>Delivery man</Text>
          </View>
          <View style={{
            height:40, width:40, alignItems:"center", justifyContent:"center", 
            borderWidth:1, borderRadius:5, borderColor:COLORS.white, backgroundColor:COLORS.transparentWhite1
          }}>
            <Image source={icons.call} style={{width:30, height:30}} />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )

  return (
    <View style={{flex:1}}>
      {/* map */}
      {renderMap()}

      {/* Header Buttons */}
      {renderHeaderButton()}

      {/* footer */}
      {renderInfo()}
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  buttonStyle:{
    width:40,
    height:40,
    borderRadius:SIZES.radius,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderColor:COLORS.gray2,
    backgroundColor:COLORS.white
  }
})