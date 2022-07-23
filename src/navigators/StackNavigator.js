import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';



const MyStack = createStackNavigator();
class Stack extends Component {
  render() {
    return (
        <MyStack.Navigator initialRouteName={'Login'} screenOptions={{headerShown:false}}>
          <MyStack.Screen name="Login" component={Login} />

        </MyStack.Navigator>
    )
  }
}



export default Stack;