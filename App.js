import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Views/Home';
import Login from './Views/Login';
import SplashScreen from './Views/SplashScreen';
import Profile from './Views/Profile';
import CreateReport from './Views/CreateReport';
import UserSettings from './Views/UserSettings';
import { title } from 'process';
import Signup from './Views/Signup';
import Location from './Views/Location';

const Stack = createNativeStackNavigator();

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
            name="Location"
            component={Location}
          />
          <Stack.Screen
            name='Splash'
            component={SplashScreen}
            options={{title: "Welcome to Unibility!"}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          
          <Stack.Screen
            name="Login"
            component={Login}
          />
          
          <Stack.Screen
            name='Profile'
            component={Profile}
          />
          <Stack.Screen
              name="UserSettings"
              component={UserSettings}
          />
          <Stack.Screen
            name='CreateReport'
            component={CreateReport}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;