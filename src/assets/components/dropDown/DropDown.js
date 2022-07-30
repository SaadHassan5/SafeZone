import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { palette, WP } from '../../config';
import fontFamily from '../../config/fontFamily';

export function DropDown({setOpt,setOpen,open,arr}){
    return(
        <View>
            <FlatList
                numColumns={1}
                data={arr}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                  <TouchableOpacity style={{ paddingVertical: WP(1) }} onPress={() => { setOpt(item.key); setOpen(!open) }}>
                    <Text style={Styles.keyTxt}>{item.key}</Text>
                  </TouchableOpacity>
                }
              />
        </View>
    )
}
const Styles = StyleSheet.create({
    bigTxt: {
        color: '#034d5a', fontSize: 34, textAlign: 'center', fontFamily: fontFamily.bold
    },
    dontTxt: {
        fontSize: 14,
        color: palette.labelGray,
        fontFamily: fontFamily.medium,
    },
    keyTxt: {
        fontSize: 16,
        color: '#034d5a',
        fontFamily: fontFamily.medium,
    }
})