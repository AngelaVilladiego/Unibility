import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class CreateReport extends Component{
    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text style={styles.titleText}>Issue Type</Text>
                    <Picker>
                        <Picker.Item label="Obstruction" value="Obstruction" />
                        <Picker.Item label="Elevator" value="Elevator" />
                        <Picker.Item label="Ramp" value="Ramp" />
                        <Picker.Item label="Parking" value="Parking" />
                        <Picker.Item label="Automatic Doorway" value="Automatic Doorway" />
                        <Picker.Item label="Noise Level" value="Noise Level" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>

                    <View style={styles.ctaBtn}>
                    <Button title="Submit" color="#006955" onPress={() => this.props.navigation.navigate('Home')}></Button>
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

export default CreateReport;