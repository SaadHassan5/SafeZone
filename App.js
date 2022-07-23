import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import fontFamily from './src/assets/config/fontFamily';
import Stack from './src/navigators/StackNavigator';

const App=()=>{
  return(
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  )
}
export default App;
