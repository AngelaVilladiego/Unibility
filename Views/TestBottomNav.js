import React, { Component, useCallback, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import BottomSheet from "./components/BottomSheet";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

const TestBottomNav = () => {
  const ref = useRef(null);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    ref?.current?.setSheet(!isActive);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* <Text>Hi</Text> */}
      </TouchableOpacity>
      <BottomSheet ref={ref} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "white",
    opacity: 0.6,
  },
});

export default TestBottomNav;
