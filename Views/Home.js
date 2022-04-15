import { StatusBar } from "expo-status-bar";
import React, { useRef, useCallback } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Platform,
} from "react-native";

import BottomSheet from "./components/BottomSheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Dimensions } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const { height, width } = Dimensions.get("window");

const actualDimensions = {};

const image = require("./images/mapbackground.png");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  currLoc: {
    color: "#2f157d",
    fontSize: 42,
    textAlign: "center",
  },
  fabButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    textAlign: "center",
  },
  fabButtonInner: {
    fontSize: 80,
  },

  topNav: {
    position: "absolute",
    top: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  searchBox: {
    backgroundColor: "#fff",
    color: "#666",
    flexGrow: 1,
    height: 50,
    borderRadius: 25,
    borderColor: "#aaa",
    borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  menuBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#444",
    color: "#fff",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 28,
    marginRight: 20,
  },
  innerMenu: {
    fontSize: 28,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "orange",
    opacity: 0.6,
  },
  formContainer: {
    height: (2 * SCREEN_HEIGHT) / 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");
if (Platform.OS === "web") {
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");
}

const Home = () => {
  const ref = useRef(null);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    ref?.current?.setSheet(!isActive);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.topNav}>
          <View style={styles.menuBtn}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Icon name="menu" color="#fff" style={styles.innerMenu} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBox}>
            <Text color="#666">Search...</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Location")}
        >
          <Icon style={styles.currLoc} name="location-on" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fabButton} onPress={onPress}>
          <Icon style={styles.fabButtonInner} name="maps-ugc" color="#ed6b00" />
        </TouchableOpacity>
      </ImageBackground>
      <BottomSheet ref={ref} bgColor={"#444"}>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.button} onPress={onPress} />
        </View>
      </BottomSheet>
    </View>
  );
};

export default Home;
