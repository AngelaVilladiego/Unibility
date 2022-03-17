import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class SplashScreen extends Component{
    render(){
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}

export default SplashScreen;