import React from 'react';
import { StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native';
import MapView,{Marker, PROVIDER_GOOGLE,Callout} from 'react-native-maps'
import mapMarker from './src/images/local.png';
import {Feather} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {Nunito_600SemiBold, Nunito_700Bold,Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
      provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude:-23.2746167,
          longitude:-50.062962,
          longitudeDelta: 0.008,
          latitudeDelta: 0.008,
      }}>
        <Marker 
          icon={mapMarker}
          calloutAnchor={{
            x:2.7,
            y:0.8,
          }}
          coordinate={{
            latitude:-23.2746167,
            longitude:-50.062962,
        }}
        >
          <Callout tooltip={true} onPress={()=>{
          }}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Lar das Meninas
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos Encontrados</Text>
        <TouchableOpacity 
        style={styles.createOrphanageButton}
        onPress={()=>{}}
        >
          <Feather name="plus" size={20} color="#FFF"></Feather>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  calloutContainer:{
    width:160,
    height:46,
    paddingHorizontal:16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius:16,
    justifyContent:'center',
    elevation:3,
  },
  calloutText:{
    display:"flex"
  },
  footer:{
    position:"absolute",
    left:24,
    right:24,
    bottom:32,

    backgroundColor:"#FFF",
    borderRadius:20,
    height:46,
    paddingLeft:24,

    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    elevation:3,
  },
  footerText:{
    color:"#8fa7b3"
  },
  createOrphanageButton:{
    width:50,
    height:46,
    backgroundColor:'#15c3d6',
    borderRadius:20,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:13
  }
});
