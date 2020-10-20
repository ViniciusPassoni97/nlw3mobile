import React from 'react';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import MapView,{Marker, PROVIDER_GOOGLE,Callout} from 'react-native-maps'
import mapMarker from './src/images/local.png';

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
          coordinate={{
            latitude:-23.2746167,
            longitude:-50.062962,
        }}
        >
          <Callout tooltip={true}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Lar das Meninas
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
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
  },
  calloutText:{
    display:'flex'
  }
});
