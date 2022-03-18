import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

class Signup extends Component {
    render() {
        return(
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <Text style={styles.titleText}>Unibility</Text>
                <Text style={styles.subtitle}>Universal ability for all</Text>
                <View style={styles.form}>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Name: </Text>
                        <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="Bobby Flay"></TextInput>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Email: </Text>
                        <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="bFlay@hotmail.ca"></TextInput>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Password: </Text>
                        <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="**********"></TextInput>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Confirm Password: </Text>
                        <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="**********"></TextInput>
                    </View>
                </View>
                <View style={styles.ctaBtn}>
                    <Button title="Sign Up" color="#006955" onPress={() => this.props.navigation.navigate('Home')}></Button>
                </View>
            </View>
        );
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

export default Signup