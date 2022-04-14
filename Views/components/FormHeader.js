import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FormHeader = ({ heading, subheading }) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{heading}</Text>
      </View>
      <Text style={styles.subheaderText}>{subheading}</Text>
    </>
  );
};

export default FormHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1b1b33",
  },
  subheaderText: {
    fontSize: 18,
    color: "#1b1b33",
    textAlign: "center",
  },
});
