import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../../../global/globalStyles';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import IconFon5 from 'react-native-vector-icons/FontAwesome5';
export const Header = ({ txt, back }) => {
    return (
        <View style={{ backgroundColor: '#034d5a', paddingVertical: HP(3), width: '100%', ...GlobalStyles.row, justifyContent: 'center' }}>
            <Text style={{ fontFamily: fontFamily.bold, fontSize: 22, color: "#fff", letterSpacing: 2 }}>{txt}</Text>
            {back&&
                <TouchableOpacity onPress={back} style={{ position: 'absolute', left: 0, paddingHorizontal: WP(5), paddingVertical: HP(1) }}>
                    <IconFon5 name='long-arrow-alt-left' color={'#fff'} size={25} />
                </TouchableOpacity>
            }
        </View>
    )
}
