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
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      ></TouchableOpacity>
      <BottomSheet ref={ref}>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.button} onPress={onPress} />
        </View>
      </BottomSheet>
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
    backgroundColor: "orange",
    opacity: 0.6,
  },
  formContainer: {
    height: (2 * SCREEN_HEIGHT) / 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestBottomNav;
