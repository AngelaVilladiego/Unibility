import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FormHeader from "./FormHeader";
import FormSelectButton from "./FormSelectButton";
import { ScrollView } from "react-native-gesture-handler";
import QuickReportForm from "./QuickReportForm";
import ReportDetailsForm from "./ReportDetailsForm";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const ReportForm = ({ parentCallback }) => {
  const [isInvalidated, setIsInvalidated] = useState(true);

  useEffect(() => {
    console.log("invalid? ", isInvalidated);
  }, [isInvalidated]);

  const onSubmit = () => {
    console.log("report type is: ", reportType);
    if (reportType == "") {
      setIsInvalidated(true);
    } else {
      if (isInvalidated) {
        setIsInvalidated(false);
      }
      //handle fetch
    }
  };

  const alertReportType = () => {
    Alert.alert(
      "Report Incomplete",
      "Report type is required."[
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed"),
        }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("cancelledd by clicking outside"),
      }
    );
  };

  const [currPage, setCurrPage] = useState(0);

  const [reportType, setReportType] = useState("");

  const handleReportType = (data) => {
    setReportType(data);
    if (data != "") {
      setIsInvalidated(false);
    }
  };

  const onNext = () => {
    if (reportType === "") {
      setIsInvalidated(true);
    } else {
      if (isInvalidated) {
        setIsInvalidated(false);
      }
      var nextPage = currPage + 1;
      var nextX = nextPage * width;
      scrollView.current.scrollTo({ x: nextX });
      setCurrPage(nextPage);
    }
  };

  const onPrevious = () => {
    var nextPage = currPage - 1;
    var nextX = nextPage * width;
    scrollView.current.scrollTo({ x: nextX });
    setCurrPage(nextPage);
  };

  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        <QuickReportForm parentCallback={handleReportType} />
        <ReportDetailsForm />
      </ScrollView>
      <View style={styles.bottomBtns}>
        <Pressable
          disabled={currPage === 0}
          style={({ pressed }) => [
            styles.btn,
            styles.iconBtn,
            { backgroundColor: pressed ? "grey" : "" },
            { opacity: currPage === 0 ? 0 : 1 },
          ]}
          onPress={onPrevious}
        >
          <Icon
            style={styles.btnIcon}
            name={"keyboard-arrow-left"}
            size={"15"}
          />
          <Text
            selectable={currPage != 0}
            style={[styles.btnText, { opacity: currPage === 0 ? 0 : 1 }]}
          >
            Back
          </Text>
        </Pressable>

        <Pressable
          disabled={isInvalidated}
          style={({ pressed }) => [
            styles.btn,
            styles.subBtn,
            { opacity: isInvalidated ? 0.2 : pressed ? 0.6 : 1 },
          ]}
          onPress={onSubmit}
        >
          <Text style={styles.subBtnText}>Submit</Text>
        </Pressable>
        <Pressable
          disabled={isInvalidated || currPage === 1}
          style={({ pressed }) => [
            styles.btn,
            styles.iconBtn,
            { backgroundColor: pressed ? "grey" : "" },
            { opacity: currPage === 1 ? 0 : isInvalidated ? 0.2 : 1 },
          ]}
          onPress={onNext}
        >
          <Text style={styles.btnText}>Next</Text>
          <Icon
            style={styles.btnIcon}
            name={"keyboard-arrow-right"}
            size={"15"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ReportForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  invalidSubBtn: {
    opacity: 1,
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
  bottomBtns: {
    paddingHorizontal: 30,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  subBtn: {
    borderColor: "purple",
    backgroundColor: "purple",
  },
  subBtnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    fontSize: 15,
    fontWeight: "700",
  },
  btnIcon: {},
});
