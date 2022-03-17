import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class Home extends Component{
    render(){
        return(
            <View>
                <Button
                    title='Login'
                    onPress={()=>this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default Home;