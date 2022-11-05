import * as Location from "expo-location";
import React from "react";
import { Linking } from "react-native";
import EnableLocationScreen from "../../scenes/EnableLocationScreen";

const EnableLocation = ({ navigation }) => {
  const checkLocationPermission = async () => {
    let { granted, canAskAgain } =
      await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      if (!canAskAgain) {
        await Linking.openSettings();
      }
      return;
    }

    navigation.replace("SubmitLongLat");
  };
  return <EnableLocationScreen onPress={checkLocationPermission} />;
};

export default EnableLocation;
