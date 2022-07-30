import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../assets/components/CustomButton/Btn';
import { Header } from '../assets/components/Header/Header';
import { HP, palette, WP } from '../assets/config';
import fontFamily from '../assets/config/fontFamily';
import { GlobalStyles } from '../global/globalStyles';
import MapView, { Marker } from 'react-native-maps';
import { IMAGES } from '../assets/imgs';
import IconMat from 'react-native-vector-icons/MaterialIcons'
import { BlueHeader } from '../assets/components/Header/BlueHeader';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const Location = (props) => {
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });
    const [marCord, setMarCord] = useState({
        latitude: 10,
        longitude: 10,
    })
    const [check, setCheck] = useState(false);
    useEffect(() => {
        console.log('Location');
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <SafeAreaView style={{ ...GlobalStyles.container, backgroundColor: "#fff" }}>
            <BlueHeader txt={"Incident Location"} btnTxt={"Submit"} btnPress={()=>{props.navigation.goBack()}}/>
            <MapView style={{ borderWidth: 1, borderColor: 'red', width: '100%', height: HP(100) }}
                showsUserLocation={true}
                followsUserLocation={true}
                initialRegion={position}
                region={position}
                onPress={(e) => { console.log(e.nativeEvent.coordinate); setCheck(true); setMarCord(e.nativeEvent.coordinate); }}
            >
                <Marker
                    coordinate={marCord}
                    onPress={()=>{}}
                    // image={IMAGES.Loading
                />
            </MapView>
        </SafeAreaView>
    )
}
export default Location;