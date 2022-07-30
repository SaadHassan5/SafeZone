import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '../assets/components/CustomButton/Btn';
import { Header } from '../assets/components/Header/Header';
import { HP, palette, WP } from '../assets/config';
import fontFamily from '../assets/config/fontFamily';
import { GlobalStyles } from '../global/globalStyles';
import IconMat from 'react-native-vector-icons/MaterialIcons'
import { DropDown } from '../assets/components/dropDown/DropDown';
import { Input } from '../assets/components/Input/input';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Report = (props) => {
    const [open, setOpen] = useState(false)
    const [opt, setOpt] = useState('Accident')
    const [desc, setDesc] = useState('')
    const [time, setTime] = useState(new Date().getTime())
    const [myDate, setMyDate] = useState(new Date())
    const [openTime, setOpenTime] = useState(false)
    const [openDate, setOpenDate] = useState(false)
    const Arr = [
        { key: 'Accident' },
        { key: 'Harassment' },
    ]
    return (
        <SafeAreaView style={{ ...GlobalStyles.container, backgroundColor: "#fff" }}>
            <Header txt={"Report Section"} back={()=>{props.navigation.goBack()}} />
            <Text style={{ ...Styles.bigTxt, marginTop: HP(5), fontSize: 25 }}>Sympathy Message For{'\n'}Incident</Text>
            <View style={{ marginTop: HP(7), paddingHorizontal: WP(5) }}>
                <View style={{ ...GlobalStyles.row, justifyContent: 'space-between' }}>
                    <Text style={{ ...Styles.keyTxt, fontSize: 16 }}>Type of Incident</Text>
                    {!open &&
                        <TouchableOpacity onPress={() => { setOpen(!open) }} style={{ ...GlobalStyles.row, backgroundColor: '#fff', ...GlobalStyles.shadow, paddingVertical: HP(1), paddingHorizontal: WP(7), alignSelf: 'center', justifyContent: 'center', borderRadius: WP(1) }}>
                            <Text style={{ ...Styles.keyTxt, fontSize: 16 }}>{opt}<Text></Text></Text>
                            <IconMat style={{ paddingLeft: WP(1), right: 0, }} name={'arrow-drop-down'} size={25} color={"#034d5a"} />

                        </TouchableOpacity>
                    }
                    {open &&
                        <View style={{ ...GlobalStyles.row, backgroundColor: '#fff', ...GlobalStyles.shadow, paddingVertical: HP(1), paddingHorizontal: WP(7), alignSelf: 'center', justifyContent: 'center', borderRadius: WP(1) }}>
                            <DropDown arr={Arr} open={open} setOpen={setOpen} setOpt={setOpt} />
                        </View>
                    }
                </View>
                <View style={{ ...GlobalStyles.row, justifyContent: 'space-between', marginTop: HP(2) }}>
                    <Text style={{ ...Styles.keyTxt, fontSize: 16 }}>Time</Text>
                    <TouchableOpacity onPress={()=>{setOpenTime(true)}} style={{ width: WP(50) }}>
                        <Input value={(new Date(time).toTimeString().split('GMT'))[0]} editable={true} />
                    </TouchableOpacity>
                </View>
                <View style={{ ...GlobalStyles.row, justifyContent: 'space-between', marginTop: HP(2) }}>
                    <Text style={{ ...Styles.keyTxt, fontSize: 16 }}>Date</Text>
                    <TouchableOpacity onPress={()=>{setOpenDate(true)}} style={{ width: WP(50) }}>
                        <Input value={myDate.toDateString()} editable={true} />
                    </TouchableOpacity>
                </View>
                <View style={{ ...GlobalStyles.row, justifyContent: 'space-between', marginTop: HP(2) }}>
                    <Text style={{ ...Styles.keyTxt, fontSize: 16 }}>Description</Text>
                    <View  style={{ width: WP(50) }}>
                        <Input placeTxt={"Enter Description"} multi value={desc} onChange={(e)=>{setDesc(e)}}  />
                    </View>
                </View>
                <View style={{ ...GlobalStyles.row, justifyContent: 'space-between', marginTop: HP(2) }}>
                    <Text style={{ ...Styles.keyTxt, fontSize: 16 }}>Location</Text>
                    <View  style={{ width: WP(50),height:HP(5) }}>
                        <CustomButton onPress={()=>{props.navigation.navigate("Location")}} txt={"Open Map"} />
                    </View>
                </View>
            </View>
            {openTime &&
            <RNDateTimePicker display='spinner' value={new Date()} onChange={(e) => {
              if (e?.type != 'dismissed') {
                setTime(e?.nativeEvent?.timestamp); setOpenTime(false)
              }
              else {
                setOpenTime(false)
              }
            }} mode="time" onResponderTerminate={() => { }} />
          }
          {openDate &&
            <RNDateTimePicker display='calendar' value={myDate} onChange={(e) => {
              if (e?.type != 'dismissed') {
                setMyDate(new Date(e?.nativeEvent?.timestamp)); setOpenDate(false)
              }
              else {
                setOpenDate(false)
              }
            }} mode={"date"} onResponderTerminate={() => {  }} />
          }
        </SafeAreaView>
    )
}
export default Report;
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
