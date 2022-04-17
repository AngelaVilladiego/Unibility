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
  TouchableWithoutFeedback,
} from "react-native";

import BottomSheet from "./components/BottomSheet";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import QuickReportForm from "./components/QuickReportForm";
import ReportForm from "./components/ReportForm";

const { height, width } = Dimensions.get("window");

const actualDimensions = {};

const image = require("./images/mapbackground.png");

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

  const closeBottomSheetIfOpen = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.setSheet(!isActive);
    }
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={closeBottomSheetIfOpen}
      >
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.topNav}>
            <View style={styles.menuBtn}>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Icon name="menu" color="#fff" style={styles.innerMenu} />
              </TouchableOpacity>
            </View>
            <View style={styles.searchBox}>
              <Text color="#666">Search...</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Location")}>
            <Icon style={styles.currLoc} name="location-on" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabButton} onPress={onPress}>
            <Icon
              style={styles.fabButtonInner}
              name="maps-ugc"
              color="#ed6b00"
            />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <BottomSheet ref={ref} bgColor={"#EEE"}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Report an issue</Text>
          <ReportForm />
          <TouchableOpacity onPress={onPress} style={styles.closeBtn}>
            <Icon name={"close"} color="white" size={15} />
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 30,
    paddingLeft: 20,
  },
  closeIcn: {
    fontWeight: "1000",
  },
  closeBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "center",
    overflow: "hidden",
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
  },
});

export default Home;
