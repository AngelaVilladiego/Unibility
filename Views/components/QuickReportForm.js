import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonsData = [
  {
    id: "1",
    label: "General",
    value: "general",
  },
  {
    id: "2",
    label: "Physical",
    value: "physical",
  },
  {
    id: "3",
    label: "Visual",
    value: "visual",
  },
  {
    id: "4",
    label: "Auditory",
    value: "auditory",
  },
  {
    id: "5",
    label: "Intellectual",
    value: "intellectual",
  },
  {
    id: "6",
    label: "Other",
    value: "other",
  },
];

const QuickReportForm = () => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  };

  return (
    <FormContainer>
      <View style={styles.formContent}>
        <View style={styles.fieldGroup}>
          <Text style={styles.fieldTitle}>Report type</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
          />
        </View>
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
  fieldGroup: {
    flex: 1,
  },
});
