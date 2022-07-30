import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../assets/components/CustomButton/Btn';
import { Header } from '../assets/components/Header/Header';
import { HP, palette } from '../assets/config';
import fontFamily from '../assets/config/fontFamily';
import { GlobalStyles } from '../global/globalStyles';

const WelcomeAdmin=(props)=>{
  return(
    <SafeAreaView style={{...GlobalStyles.container,backgroundColor:"#fff"}}>
        <Header txt={"Safezone"}/>
        <Text style={{...Styles.bigTxt,marginTop:HP(5)}}>Welcome Admin</Text>
        <View style={{marginTop:HP(7),alignSelf:'center'}}>
            <View style={{height:HP(7)}}>
                <CustomButton onPress={()=>{props.navigation.navigate("PoliceAccounts")}} txt={"Police Accounts"}/>
            </View>
            <View style={{height:HP(7),marginTop:HP(3)}}>
                <CustomButton onPress={()=>{props.navigation.navigate("Report")}} txt={"Update Security"}/>
            </View>
            <View style={{height:HP(7),marginTop:HP(3)}}>
                <CustomButton onPress={()=>{props.navigation.navigate("Report")}} txt={"Exit"}/>
            </View>
            
        </View>
    </SafeAreaView>
  )
}
export default WelcomeAdmin;
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
      fontSize: 18,
      color: '#034d5a',
      fontFamily: fontFamily.semi_bold,
    }
  })
  