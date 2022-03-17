import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, SectionList } from 'react-native';

const DATA = [
    {
      title: "Disabilities",
      data: ["Auditory", "Vision"]
    },
    {
      title: "Frequent Places",
      data: ["Square One", "Planet Fitness"]
    }
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

class Profile extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={{flex:0.25, flexDirection:"row"}}>
                    <Image source={require("./images/bobbyflay.jpeg")} style={styles.circle}/>
                    <Text style={styles.nameLbl}>Bobby Flay</Text>
                </View>
                <View style={{flex:3, flexDirection:"row"}}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
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
    nameLbl:{
        fontSize: 28,
        marginTop: 7,
        marginStart: 8
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
      },
      item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
      },
      header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
      title: {
        fontSize: 24
      }
  });

export default Profile;