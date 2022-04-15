import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";

const FormSelectButton = ({ backgroundColor, style, title }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.buttonContainer, style, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormSelectButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    width: "50%",
    backgroundColor: "#1b1b33",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 16 },
});
