import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../assets/components/CustomButton/Btn';
import { Header } from '../assets/components/Header/Header';
import { HP, palette, WP } from '../assets/config';
import { CONSTANTS } from '../assets/config/Constants';
import fontFamily from '../assets/config/fontFamily';
import { GlobalStyles } from '../global/globalStyles';
import IconFonAw from 'react-native-vector-icons/FontAwesome'
import IconMatCom from 'react-native-vector-icons/MaterialIcons'
import { BlueHeader } from '../assets/components/Header/BlueHeader';

const DetailPoliceAccount = (props) => {
  return (
    <SafeAreaView style={{ ...GlobalStyles.container, backgroundColor: "#fff" }}>
        <BlueHeader back={()=>{props.navigation.goBack()}} txt={"Police ID "+ (props.route.params?.name?.split(" "))[0]} />
        <View style={{  marginHorizontal: WP(10),flex:1,justifyContent:'center', }}>
                    <View style={{paddingHorizontal:WP(5),paddingVertical:HP(3),backgroundColor:'#fff',...GlobalStyles.shadow}}>
                        <View style={{...GlobalStyles.row,justifyContent:'space-between'}}>
                            <Text style={{...Styles.keyTxt}}>Name</Text>
                            <Text style={{...Styles.keyTxt}}>{props.route.params?.name}</Text>
                        </View>
                        <View style={{...GlobalStyles.row,justifyContent:'space-between',marginTop:HP(1)}}>
                            <Text style={{...Styles.keyTxt}}>CNIC</Text>
                            <Text style={{...Styles.keyTxt}}>{props.route.params?.cnic}</Text>
                        </View>
                        <View style={{...GlobalStyles.row,justifyContent:'space-between',marginTop:HP(1)}}>
                            <Text style={{...Styles.keyTxt}}>Email</Text>
                            <Text style={{...Styles.keyTxt}}>{props.route.params?.email}</Text>
                        </View>
                        <View style={{...GlobalStyles.row,justifyContent:'space-between',marginTop:HP(1)}}>
                            <Text style={{...Styles.keyTxt}}>Phone</Text>
                            <Text style={{...Styles.keyTxt}}>{props.route.params?.phn}</Text>
                        </View>
                    </View>
                    <View style={{...GlobalStyles.row,justifyContent:'space-between',marginTop:HP(3)}}>
                            <View style={{height:HP(5)}}>
                                <CustomButton onPress={()=>{props.navigation.goBack()}} backColor={"#2475C0"} txt={"Dismiss"}/>
                            </View>
                            <View style={{height:HP(5)}}>
                                <CustomButton onPress={()=>{props.navigation.goBack()}} backColor={"#2475C0"} txt={"Approve"}/>
                            </View>
                        </View>
        </View>
    </SafeAreaView>
  )
}
export default DetailPoliceAccount;
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
    fontSize: 14,
    color: '#034d5a',
    fontFamily: fontFamily.semi_bold,
  }
})
