import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";
import FormHeader from "./FormHeader";
import FormSelectButton from "./FormSelectButton";
import { ScrollView } from "react-native-gesture-handler";
import QuickReportForm from "./QuickReportForm";
import ReportDetailsForm from "./ReportDetailsForm";

const ReportForm = () => {
  return (
    <View style={styles.container}>
      <View>
        <FormHeader heading="Heading" subheading="Subheading" />
      </View>
      <View style={styles.selectButtonContainer}>
        <FormSelectButton
          style={styles.borderLeft}
          backgroundColor="rgba(27,27,51,1)"
          title="step1"
        />
        <FormSelectButton
          style={styles.borderRight}
          backgroundColor="rgba(27,27,51,0.4)"
          title="step2"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <QuickReportForm />
        <ReportDetailsForm />
      </ScrollView>
    </View>
  );
};

export default ReportForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
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
  selectButtonContainer: {
    flexDirection: "row",
    padding: 20,
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
