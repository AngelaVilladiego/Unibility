import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Picker } from '@react-native-picker/picker';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Form from './components/Form';

class CreateRating extends Component{
    /*
    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text style={styles.titleText}>Title</Text>
                    <Text style={styles.titleText}>Accessibility Feature</Text>
                    <Picker>
                        <Picker.Item label="Elevator" value="Elevator" />
                        <Picker.Item label="Ramp" value="Ramp" />
                        <Picker.Item label="Parking" value="Parking" />
                        <Picker.Item label="Automatic Doorway" value="Automatic Doorway" />
                        <Picker.Item label="Noise Level" value="Noise Level" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <Text style={styles.titleText}>Review</Text>
                    <TextInput editable={false} selectTextOnFocus={false} style={styles.formFill} value="Write about the experience here..."></TextInput>
                    <View style={styles.ctaBtn}>
                    <Button title="Submit" color="#006955" onPress={() => this.props.navigation.navigate('Location')}></Button>
                </View>
                </View>
            </SafeAreaView>
        )
    }
    */

    handleSubmitForm = (stars, data) => {
        console.log("parent submit called with message: stars - ", stars, ", body - ", data);
        //submit clicked, send fetch request
        
        /*
        obj = {};        
        obj["rating"] = stars;
        obj["body"] = body;
        
        console.log("object: ", obj);
        */

        /*
        requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({rating: 1, body: "test body"})
        };
        */

        /*
        const content = {
            rating: 1,
            body: "some review"
        }
        */
        

        
        fetch("http://localhost:5000/api/reviews/addreview", 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({rating: 1, body: "test body"})
        })
        .then(response => { 
            console.log("response received. is ok = ", response.ok)
            this.props.navigation.navigate("ReviewsPage");
         })
        
    }

    render(){
        return(
            <SafeAreaView>
                <View>
                    <Form parentCallback = {this.handleSubmitForm}/>
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

  export default CreateRating;