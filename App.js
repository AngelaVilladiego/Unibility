import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Views/Home";
import Login from "./Views/Login";
import SplashScreen from "./Views/SplashScreen";
import TestBottomNav from "./Views/TestBottomNav";
import Profile from "./Views/Profile";
import CreateReport from "./Views/CreateReport";
import UserSettings from "./Views/UserSettings";
//import { title } from "process";
import Signup from "./Views/Signup";
import Location from "./Views/Location";
import CreateRating from "./Views/CreateRating";
import ReviewsPage from "./Views/ReviewsPage";
import ReportForm from "./Views/components/ReportForm";
import Form from "./Views/components/Form";
import * as TaskManager from "expo-task-manager";
import * as LocationService from "expo-location";

const Stack = createNativeStackNavigator();
const LOCATION_TASK_NAME = "foreground-location-task";

const requestPermissions = async () => {
  const { status } = await LocationService.requestForegroundPermissionsAsync();
  if (status === "granted") {
    await LocationService.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: LocationService.Accuracy.Balanced,
    });
  }
};

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log("HANDLE THIS LOCATION ERROR LATER");
    return;
  }
  if (data) {
    const { locations } = data;
  }
});

class App extends Component {
  componentDidMount() {
    requestPermissions();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ title: "Welcome to Unibility!" }}
          />
          <Stack.Screen name="CreateRating" component={CreateRating} />
          <Stack.Screen name="Form" component={Form} />

          <Stack.Screen
            // options={{headerShown: false}}
            name="Location"
            component={Location}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="ReportForm"
            component={ReportForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="UserSettings" component={UserSettings} />
          <Stack.Screen name="CreateReport" component={CreateReport} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ReviewsPage" component={ReviewsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
