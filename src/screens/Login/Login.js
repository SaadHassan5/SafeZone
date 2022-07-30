import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Header } from '../../assets/components/Header/Header';
import { Input } from '../../assets/components/Input/input';
import { HP, palette, WP } from '../../assets/config';
import { GlobalStyles } from '../../global/globalStyles';
import IconMat from 'react-native-vector-icons/MaterialIcons'
import fontFamily from '../../assets/config/fontFamily';
import { CustomButton } from '../../assets/components/CustomButton/Btn';
const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [opt, setOpt] = useState('User')
  const loginAs = [
    { key: 'User' },
    { key: 'Police' },
    { key: 'Admin' },
  ]
  return (
    <View style={{ ...GlobalStyles.container }}>
      <Header txt={"Safe Zone"} />
      <View style={{ paddingHorizontal: WP(6), justifyContent: 'center', flex: 1 }}>
        <Text style={{ ...Styles.bigTxt }}>Welcome Back</Text>
        <View style={{ justifyContent: 'center', marginTop: HP(6) }}>
          <Input onChange={(e) => { setEmail(e) }} placeTxt={'Email'} icon={true} />
          <IconMat style={{ position: 'absolute', paddingHorizontal: WP(5) }} name={'email'} size={25} color={palette.labelGray} />
        </View>
        <View style={{ justifyContent: 'center', marginTop: HP(2) }}>
          <Input password eye onChange={(e) => { setPassword(e) }} placeTxt={'Password'} icon={true} />
          <IconMat style={{ position: 'absolute', paddingHorizontal: WP(5) }} name={'lock'} size={25} color={palette.labelGray} />
        </View>
        <View style={{ marginTop: HP(2), }}>
          {!open &&
            <TouchableOpacity onPress={() => { setOpen(!open) }} style={{ ...GlobalStyles.row,backgroundColor: '#fff', ...GlobalStyles.shadow, paddingVertical: HP(1), paddingHorizontal: WP(7), alignSelf: 'center',justifyContent:'center',borderRadius:WP(1) }}>
              <Text style={{ ...Styles.keyTxt }}>{opt}<Text></Text></Text>
              <IconMat style={{  paddingLeft: WP(1),right: 0, }} name={'arrow-drop-down'} size={25} color={"#034d5a"} />

            </TouchableOpacity>
          }
          <View style={{ height: HP(6), paddingHorizontal: WP(5), marginTop: HP(2) }}>
            <CustomButton onPress={()=>{opt=="User"?props.navigation.navigate("WelcomeUser"):props.navigation.navigate("WelcomeAdmin")}} txt={'Login'} />
          </View>
          <TouchableOpacity onPress={()=>{props.navigation.navigate('Signup')}} style={{ alignSelf: 'center', marginTop: HP(1), paddingVertical: HP(1) }}>
            <Text style={{ ...Styles.dontTxt, }}>Don't have an account?<Text style={{ color: '#034d5a', fontFamily: fontFamily.bold }}> Sign up</Text></Text>
          </TouchableOpacity>
          {open &&
            <View style={{ marginTop: -HP(2), position: 'absolute', backgroundColor: '#fff', ...GlobalStyles.shadow, paddingVertical: HP(1), paddingHorizontal: WP(7), alignSelf: 'center' }}>
              <FlatList
                numColumns={1}
                data={loginAs}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                  <TouchableOpacity style={{ paddingVertical: WP(1) }} onPress={() => { setOpt(item.key); setOpen(!open) }}>
                    <Text style={Styles.keyTxt}>{item.key}</Text>
                  </TouchableOpacity>
                }
              />
            </View>
          }
        </View>
      </View>
    </View>
  )
}
export default Login;
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
