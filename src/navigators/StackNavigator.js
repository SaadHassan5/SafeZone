import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import Report from '../screens/report';
import Location from '../screens/Location';
import WelcomeUser from '../screens/WelcomeUser';
import WelcomeAdmin from '../screens/WelcomeAdmin';
import PoliceAccounts from '../screens/PoliceAccounts';
import DetailPoliceAccount from '../screens/DetailPoliceAccount';
import LetsMove from '../screens/LetsMove';



const MyStack = createStackNavigator();
class Stack extends Component {
  render() {
    return (
        <MyStack.Navigator initialRouteName={'Login'} screenOptions={{headerShown:false}}>
          <MyStack.Screen name="Login" component={Login} />
          <MyStack.Screen name="Signup" component={Signup} />
          <MyStack.Screen name="WelcomeUser" component={WelcomeUser} />
          <MyStack.Screen name="WelcomeAdmin" component={WelcomeAdmin} />
          <MyStack.Screen name="Report" component={Report} />
          <MyStack.Screen name="Location" component={Location} />
          <MyStack.Screen name="PoliceAccounts" component={PoliceAccounts} />
          <MyStack.Screen name="DetailPoliceAccount" component={DetailPoliceAccount} />
          <MyStack.Screen name="LetsMove" component={LetsMove} />

        </MyStack.Navigator>
    )
  }
}



export default Stack;