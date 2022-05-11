import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps';

const Testing = () => {
    return (
        <View style={{marginTop:150}}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

            <Text>HElllllll</Text>
        </View>
    );
}

export default Testing