import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const FormContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
});
