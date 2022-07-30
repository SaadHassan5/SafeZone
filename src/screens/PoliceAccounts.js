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

const PoliceAccounts = (props) => {
  return (
    <SafeAreaView style={{ ...GlobalStyles.container, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: HP(10) }}>
        <Header txt={"Police Accounts"} />
        <View style={{ marginTop: HP(2), marginHorizontal: WP(5) }}>
          <View style={{ ...GlobalStyles.row, justifyContent: 'space-between' }}>
            <Text style={{ ...Styles.keyTxt }}>Accounts</Text>
            <Text style={{ ...Styles.keyTxt }}>Actions</Text>
          </View>
          {CONSTANTS.PoliceAccounts.map((item, index) =>
            <TouchableOpacity key={index} style={{paddingVertical:HP(1)}} onPress={()=>{props.navigation.navigate("DetailPoliceAccount",item)}}>
              <View style={{ ...GlobalStyles.row }}>
                <View style={{ ...GlobalStyles.row }}>
                  <View style={{width:WP(10),height:WP(10),borderRadius:WP(5),backgroundColor:"#2475C0",justifyContent:'center',alignItems:'center'}}>
                    <IconFonAw name='user' color={"#fff"} size={20} />
                  </View>
                  <View style={{ paddingLeft: WP(5) }}>
                    <Text style={{ ...Styles.keyTxt, }}>{item.name}</Text>
                    <Text style={{ ...Styles.dontTxt }}>{item.phn}</Text>
                  </View>
                </View>
                <IconMatCom name='edit' color={"black"} size={20}  style={{position: 'absolute',right:WP(5)}}/>
              </View>
            </TouchableOpacity>
          )

          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default PoliceAccounts;
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
