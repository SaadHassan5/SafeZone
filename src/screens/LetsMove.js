import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../assets/components/CustomButton/Btn';
import { Header } from '../assets/components/Header/Header';
import { HP, palette, WP } from '../assets/config';
import fontFamily from '../assets/config/fontFamily';
import { IMAGES } from '../assets/imgs';
import { GlobalStyles } from '../global/globalStyles';

const LetsMove = (props) => {
  return (
    <SafeAreaView style={{ ...GlobalStyles.container, backgroundColor: "#fff" }}>
      <Header txt={"Safezone"} />
      <Text style={{ ...Styles.bigTxt, marginTop: HP(5) }}>Lets Move Safely</Text>
      <View style={{ marginTop: HP(4), alignSelf: 'center' }}>
        <Image source={IMAGES.Logo} style={{ width: WP(50), height: WP(50), borderRadius: WP(30) }} />
      </View>
      <View style={{ height: HP(6), marginHorizontal: WP(10),backgroundColor:"#fff",...GlobalStyles.shadow,marginTop:HP(2) }}>
        <CustomButton onPress={()=>{props.navigation.navigate("Login")}} backColor={"#fff"} txtColor={"#034d5a"} txt={"Login"} />
      </View>
      <View style={{ height: HP(6), paddingHorizontal: WP(10) ,marginTop:HP(2)}}>
        <CustomButton onPress={()=>{props.navigation.navigate("Signup")}} txt={"Sign Up"} />
      </View>
    </SafeAreaView>
  )
}
export default LetsMove;
const Styles = StyleSheet.create({
  bigTxt: {
    color: '#034d5a', fontSize: 26, textAlign: 'center', fontFamily: fontFamily.bold
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
