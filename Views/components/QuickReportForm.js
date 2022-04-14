import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import FormContainer from "./FormContainer";

const QuickReportForm = () => {
  return (
    <FormContainer>
      <View style={styles.formContent}>
        <Text style={styles.fieldTitle}>Report type</Text>
      </View>
    </FormContainer>
  );
};

export default QuickReportForm;

const styles = StyleSheet.create({
  formContent: {
    padding: 20,
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  fieldTitle: {},
});
