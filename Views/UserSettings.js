import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class UserSettings extends Component{
    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text style={styles.titleText}>User Settings:</Text>
                    <Text style={styles.subtitle}>Name: Bobby Flay</Text>
                    <Text style={styles.subtitle}>Username: The_Ch3f</Text>
                    <Text style={styles.subtitle}>Email and Password(Click to use credentials)</Text>
                </View>
                <View>
                    <Text style={styles.titleText}>Application Settings:</Text>
                    <Text style={styles.subtitle}>Sound effects: Off</Text>
                    <Text style={styles.subtitle}>Narration: On</Text>
                    <Text style={styles.subtitle}>Colorblindness Mode: Off</Text>
                    <Text style={styles.subtitle}>High-contrast mode: On</Text>
                </View>
            </SafeAreaView>
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

export default UserSettings;