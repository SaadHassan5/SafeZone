import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../assets/components/Header/Header';
import { GlobalStyles } from '../../global/globalStyles';

const Login=()=>{
  return(
    <View style={{...GlobalStyles.container}}>
      <Header txt={"Safe Zone"}/>
      <Text style={{color:'black'}}>saad</Text>
    </View>
  )
}
export default Login;
