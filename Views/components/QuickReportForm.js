import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import RadioButton from "./RadioButton";

const radioButtonsData = [
  {
    key: "general",
    text: "General",
  },
  {
    key: "physical",
    text: "Physical",
  },
  {
    key: "visual",
    text: "Visual",
  },
  {
    key: "auditory",
    text: "Auditory",
  },
  {
    key: "intellectual",
    text: "Intellectual",
  },
  {
    key: "other",
    text: "Other",
  },
];

const QuickReportForm = ({ parentCallback }) => {
  const [reportType, setReportType] = useState("");

  const onRadioValueChanged = (data) => {
    setReportType(data);
  };

  useEffect(() => {
    parentCallback(reportType);
  }, [reportType]);

  return (
    <FormContainer>
      <View style={styles.formContent}>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldTitle}>Report type</Text>
          <View style={styles.radioContainer}>
            <RadioButton
              parentCallback={onRadioValueChanged}
              PROP={radioButtonsData}
            />
          </View>
        </View>
      </View>
    </FormContainer>
  );
};

export default QuickReportForm;

const styles = StyleSheet.create({
  formContent: {
    padding: 20,
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  fieldTitle: {
    paddingBottom: 15,
    fontSize: 20,
  },
  fieldGroup: {
    flex: 1,
  },
  radioContainer: {
    flex: 1,
    alignItems: "stretch",
    paddingHorizontal: 10,
  },
});
