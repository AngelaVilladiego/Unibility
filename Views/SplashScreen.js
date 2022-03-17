import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class SplashScreen extends Component{
    render(){
        return(
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <Text style={styles.titleText}>Unibility</Text>
                <Text style={styles.subtitle}>Universal ability for all</Text>
                <Button
                    title='Login'
                    onPress={()=>this.props.navigation.navigate('Login')}
                    style={{flex: 2}}
                />
                <Button
                    title='Signup'
                    style={{flex: 2}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50,
      },
    titleText:{
        fontSize: 48,
        textAlign: 'center',
        color:"teal"
    },
    subtitle:{
        fontStyle: "italic",
        color:"#226622",
        textAlign: 'center',
        marginTop:15,
        marginBottom:30,
    },
  });

export default SplashScreen;