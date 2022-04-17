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
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const emptyLocation = {
  latitude: 0.0,
  longitude: 0.0,
};

const ReportForm = ({ parentCallback }) => {
  const navigation = useNavigation();

  const [isInvalidated, setIsInvalidated] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currPage, setCurrPage] = useState(0);
  const [reportType, setReportType] = useState("");
  const [coords, setCoords] = useState({
    latitude: 0.0,
    longitude: 0.0,
  });

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location != null) {
      let gotCoords = location["coords"];
      console.log("location retrieved: latitude", location["coords"]);
      setCoords({
        ...coords,
        latitude: gotCoords["latitude"],
        longitude: gotCoords["longitude"],
      });
    }
  }, [location]);

  useEffect(() => {
    console.log(coords);
  }, [coords]);

  useEffect(() => {
    console.log("invalid? ", isInvalidated);
  }, [isInvalidated]);

  const requestLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  const getLocation = async () => {
    let { status } = await Location.getForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log(status);
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  const onSubmit = () => {
    console.log("report type is: ", reportType);
    if (reportType == "") {
      setIsInvalidated(true);
    } else {
      if (isInvalidated) {
        setIsInvalidated(false);
      }
      if (coords === emptyLocation) {
        Alert.alert(
          "Cannot create a report if permissions are denied.",
          "You must allow course and fine location permissions for this app in your phone settings."
        );
      } else if (coords != null) {
        let bodyJson = JSON.stringify({ type: reportType, location: coords });
        console.log(bodyJson);
        fetch("http://localhost:5000/api/reports/addreport", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: reportType, location: coords }),
        }).then((response) => {
          console.log("response received. is ok = ", response.ok);
          navigation.navigate("Home");
        });
      }
    }
  };

  const handleReportType = (data) => {
    console.log("is this it? ", data);
    setReportType(data);
    if (data != "" && data != null) {
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
          <Icon style={styles.btnIcon} name={"keyboard-arrow-left"} size={15} />
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
            size={15}
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
