import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Picker } from '@react-native-picker/picker';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

class ReviewsPage extends Component{
    render(){
        return(
            <SafeAreaView>
                <View style={[styles.container, {flexDirection: 'column'}]}>
                <View>
                    <Text style={styles.titleText}>Reviews:</Text>
                    <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="Review"></TextInput>
                    <Text style={styles.titleText}>Reviews:</Text>
                    <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="Review"></TextInput>
                    <Text style={styles.titleText}>Reviews:</Text>
                    <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="Review"></TextInput>
                </View>
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        alignContent: 'center',
        marginBottom: 30,
        marginTop: 10,
    },
    formRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 20
    },
    formFill: {
        flexGrow: 1,
        backgroundColor: '#fff',
        color: '#444',
        borderRadius: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20
    },
    formLabel: {
        fontSize: 22,
        color: '#000'
    },
    ctaBtn: {
        width: '50%',
        alignSelf: 'center',
    }
  });

export default ReviewsPage;