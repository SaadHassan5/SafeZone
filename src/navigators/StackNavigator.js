import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import Welcome from '../screens/welcome';



const MyStack = createStackNavigator();
class Stack extends Component {
  render() {
    return (
        <MyStack.Navigator initialRouteName={'Login'} screenOptions={{headerShown:false}}>
          <MyStack.Screen name="Login" component={Login} />
          <MyStack.Screen name="Signup" component={Signup} />
          <MyStack.Screen name="Welcome" component={Welcome} />

        </MyStack.Navigator>
    )
  }
}



export default Stack;