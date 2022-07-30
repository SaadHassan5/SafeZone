import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../../../global/globalStyles';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import IconFon5 from 'react-native-vector-icons/FontAwesome5';
export const CustomButton = ({ txt, onPress,backColor,txtColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: backColor?backColor:'#034d5a', height:"100%", width: '100%',alignItems: 'center',justifyContent: 'center',borderRadius:WP(2)}}>
            <Text style={{color:txtColor?txtColor:'#fff',fontSize:16,fontFamily:fontFamily.bold,paddingHorizontal:WP(10)}}>{txt}</Text>
        </TouchableOpacity>
    )
}
