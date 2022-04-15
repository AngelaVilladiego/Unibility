import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const locImg = require('./images/location_img.jpg');

class Location extends Component {
    constructor(props){
        super(props)
        this.state = {data: [], ownerContactInfo: []}
        this.getLocationData = this.getLocationData.bind(this)
    }

    async getLocationData(){
        try{
            await fetch('http://127.0.0.1:5000/api/location/getlocationdata',{
                method: 'GET',
                Accept: 'application/json',
              })
                .then((response) => response.json())
                .then((results) => { this.setState({data: results, ownerContactInfo: results.OwnerContactInfo})});
        }
        catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        
        this.getLocationData();
        console.log(this.state.data)
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topNav}>
                    <View style={styles.menuBtn} onClick={() => this.props.navigation.navigate('Profile')}>
                        <Icon name="menu" color="#fff" style={styles.innerMenu}/>
                    </View>                        
                    <View style={styles.searchBox}>
                        <Text color="#666">
                            Search...
                        </Text>
                    </View>
                </View>
                <Image style={styles.locImg} source={locImg}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{this.state.data.name}</Text>
                    <View style={styles.row}>
                        <Text style={styles.subtitle}>4.9</Text>
                        <Icon style={{fontSize: 18}} name="star" color="#ffa600"/>
                        <Icon style={{fontSize: 18}} name="star" color="#ffa600"/>
                        <Icon style={{fontSize: 18}} name="star" color="#ffa600"/>
                        <Icon style={{fontSize: 18}} name="star" color="#ffa600"/>
                        <Icon style={{fontSize: 18}} name="star" color="#ffa600"/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.subtitle}>{this.state.data.TypeOfBusiness}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.accIcon}>
                            <Icon style={styles.innerIcon} name="wheelchair-pickup" color="#fff"/>
                        </View>
                    </View>

                    <View style={styles.rowCenter}>
                        <Text style={styles.navLink} onPress={() => this.props.navigation.navigate("ReviewsPage")}>Accessibility Reviews</Text>
                    </View>

                    <View>
                        <Text>Text: {this.state.ownerContactInfo.Text}</Text>
                        <Text>Call: {this.state.ownerContactInfo.Call}</Text>
                        <Text>Address: {this.state.ownerContactInfo.Address}</Text>
                    </View>

                    {/* <Button
                        title="Suggest an edit"
                        onPress={() => this.props.navigation.navigate("CreateReport")}
                        /> */}
                </View>
                
            </View>
        )

    }

}

const styles = StyleSheet.create({
    detsImg: {
        height: 200,
        width:null,
        resizeMode: 'contain',
    },
    line: {
        width: 1000,
        height: 4,
        color: "blue"
    },
    rowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        marginBottom: 10,
        alignSelf: 'stretch'
    },
    navLinkSelect: {
        color: "blue",
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    navLink: {
        color: "blue",
        fontSize: 18,
    },
    accIcon: {
        backgroundColor: "blue",
        width: 50,
        height: 50,
        borderRadius: 100,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        textAlign: 'center',
        marginRight: 15
    },
    innerIcon: {
        fontSize: 28
    },
    subtitle: {
        fontSize: 18,
        color: '#333',
        marginRight: 10
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10,
        alignSelf: 'stretch'
    },
    content: {
        flex: 5,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        color: '#000',
        marginBottom: 20
    },
    locImg: {
        flex: 2,
        overflow:'hidden',
        width: null,
        resizeMode: 'cover',
    },
    topNav: {
        position: 'absolute',
        top: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        zIndex: 3
    },
    searchBox: {
        backgroundColor: '#fff',
        color: '#666',
        flexGrow: 1,
        height: 50,
        borderRadius: 25,
        borderColor: '#aaa',
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 30,
        paddingRight: 30
    },
    menuBtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#444',
        color: '#fff',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        marginRight: 20,
        borderColor: "#fff",
        borderWidth: 1
    },
    innerMenu: {
        fontSize: 28
    },
    container: {
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch'
    },
});

export default Location;